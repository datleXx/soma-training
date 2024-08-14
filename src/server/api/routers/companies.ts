/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import typesenseClient from "~/server/typesenseClient";
import { CompaniesInfiniteQueryResponse } from "~/helper/companiesHelper";

export const companiesRouter = createTRPCRouter({
  fetchTenCompanies: protectedProcedure.query(async ({ ctx }) => {
    try {
      const companies = await ctx.db.company.findMany({
        take: 10,
        include: {
          sectors: true,
        },
      });
      return companies;
    } catch (e) {
      console.log(e);
    }
  }),
  fetchMultipleCompanies: protectedProcedure.query(async ({ ctx }) => {
    try {
      const companies = await ctx.db.company.findMany({
        take: 20,
        include: {
          sectors: true,
        },
      });
      return companies;
    } catch (e) {
      console.log(e);
    }
  }),
  fetchCompaniesWithCursor: protectedProcedure
    .input(
      z.object({
        cursor: z.string().nullish(),
        filters: z.object({
          region: z.string(),
          industry: z.string(),
          valuation: z.number(),
        }),
        sortOrder: z.string().optional(),
        query: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const whereClause = {
        ...(input.filters.region !== "all" && { region: input.filters.region }),
        ...(input.filters.valuation !== 0 && {
          valuation: input.filters.valuation,
        }),
      };

      const sectorWhereClause = {
        ...(input.filters.industry !== "all" && {
          sectors: {
            some: {
              name: input.filters.industry,
            },
          },
        }),
      };

      const sortOrder = input.sortOrder === "ascending" ? "desc" : "asc";

      const companiesList = await ctx.db.company.findMany({
        take: 31,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        where: {
          ...whereClause,
          ...sectorWhereClause,
        },
        include: {
          sectors: true,
        },
        orderBy: {
          valuation: sortOrder,
        },
      });
      const lastItem = companiesList.pop();

      const nextCursor: typeof input.cursor | undefined = lastItem?.id;
      if (companiesList.length < 30) {
        return {
          companiesList,
          nextCursor: undefined,
        };
      }
      return {
        companiesList,
        nextCursor,
      };
    }),

  fetchCompaniesWithSearch: protectedProcedure
    .input(
      z.object({
        search: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const companiesList = await ctx.db.company.findMany({
        where: {
          name: {
            contains: input.search,
          },
        },
      });
      return companiesList;
    }),

  fetchCompanyWithSlug: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const company = await ctx.db.company.findFirst({
        where: { slug: input.slug },
        include: {
          sectors: true,
        },
      });

      return company;
    }),

  fetchCompaniesWithTypesense: protectedProcedure
    .input(
      z.object({
        cursor: z.string().nullish(),
        filters: z.object({
          region: z.string(),
          industry: z.string(),
          valuation: z.number(),
        }),
        sortOrder: z.string().optional(),
        query: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      const whereClause = {
        ...(input.filters.region !== "all" && { region: input.filters.region }),
        ...(input.filters.valuation !== 0 && {
          valuation: input.filters.valuation,
        }),
      };

      const sectorWhereClause = {
        ...(input.filters.industry !== "all" && {
          sectors: {
            some: {
              name: input.filters.industry,
            },
          },
        }),
      };

      const sortOrder = input.sortOrder === "ascending" ? "desc" : "asc";

      try {
        const searchResults = await typesenseClient
          .collections("companies")
          .documents()
          .search({
            q: input.query || "*",
            query_by: "name,oneLiner,region,sectors",
            filter_by: [
              whereClause.region ? `region:${whereClause.region}` : "",
              whereClause.valuation
                ? `valuation:=${whereClause.valuation}`
                : "",
              sectorWhereClause.sectors
                ? `sectors:[${sectorWhereClause.sectors.some.name}]`
                : "",
            ]
              .filter(Boolean)
              .join(" && "),
            sort_by: `valuation:${sortOrder}`,
            per_page: 30,
            page: input.cursor ? parseInt(input.cursor, 10) : 1,
          });

        const companiesList =
          searchResults.hits?.map((hit) => hit.document) || [];
        const nextCursor =
          searchResults.found < 30
            ? undefined
            : (searchResults.page + 1).toString();

        return {
          companiesList: companiesList as CompaniesInfiniteQueryResponse[],
          nextCursor,
          searchResults,
        };
      } catch (error) {
        console.error("Search error:", error);
        throw new Error("An error occurred while searching for companies");
      }
    }),
});
