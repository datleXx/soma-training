
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    createUser: protectedProcedure
    .input(
        z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        try {
            const checkUser = await ctx.db.user.findUnique({
                where: {
                    email: input.email,
                }
            })
            if (checkUser) {
                throw new Error("User already exists");
            }
            const user = await ctx.db.user.create({
                data: {
                    email: input.email,
                    password: input.password,
                    name: input.name,
                },
            })
            return user;
        }
        catch (e) {
            console.log(e);
        }
    }),

    updateUserRole: protectedProcedure
    .input(
        z.object({
            email: z.string(),
            role: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        try {
            const user = await ctx.db.user.update({
                where: {
                    email: input.email,
                },
                data: {
                    role: input.role,
                },
            });
            return user;
        }
        catch (e) {
            console.log(e);
        }
    }),

    fetchValidatedUsers: protectedProcedure
    .query(async ({ ctx }) => {
        try {
            const users = await ctx.db.user.findMany({
                where: {
                    role: {
                        in: ["admin", "user"],
                    },
                },
            });
            return users;
        }
        catch (e) {
            console.log(e);
        }
    }),

    fetchWaitlistUsers: protectedProcedure
    .query(async ({ ctx }) => {
        try {
            const users = await ctx.db.user.findMany({
                where: {
                    role: "waitlist",
                },
            });
            return users;
        }
        catch (e) {
            console.log(e);
        }
    }),

});
