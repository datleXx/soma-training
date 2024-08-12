/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const companiesRouter = createTRPCRouter({
    fetchTenCompanies: protectedProcedure
    .query(async ({ ctx }) => {
        try {

            const companies = await ctx.db.company.findMany({
                take: 10,
            })
            return companies;
        }
        catch (e) {
            console.log(e);
        }
    }),
});
