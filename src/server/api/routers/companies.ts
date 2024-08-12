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
  fetchCompaniesWithCursor: protectedProcedure.input(z.object({
    cursor: z.string().nullish()
  }))
  .query(async ({ ctx, input }) => {
    const batch = await ctx.db.cursor.findFirst({
      where:{
        id: input.cursor ?? ""
      },
      include: {
        companies: true
      },
    });

    return {
      batch,
      nextCursor: batch?.nextCursor ?? "",
      hasNextPage: batch?.nextCursor ? true : false,
    };
  }),
});
