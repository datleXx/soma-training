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
  fetchCompaniesWithInfiniteScroll: protectedProcedure.input(z.object({
    cursor: z.string().nullish(),
    limit: z.number().min(10).max(30)
  }))
  .query(async ({ ctx, input }) => {
    const companies = await ctx.db.company.findMany({
      take: input.limit + 1,
      cursor: input.cursor ? { id: input.cursor } : undefined,
    });
  }),
});
