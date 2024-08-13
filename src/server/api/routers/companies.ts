/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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
          valuation: z.string(),
        }),
      }),
    )
    .query(async ({ ctx, input }) => {
      const whereClause = {
        ...(input.filters.region !== "all" && { region: input.filters.region }),
        ...(input.filters.valuation !== "all" && {
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
});
