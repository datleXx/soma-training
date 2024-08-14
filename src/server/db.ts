import { Prisma, PrismaClient } from "@prisma/client";

const createPrismaClient = () => {
  const logOptions = process.env.NODE_ENV === "development" && typeof window === "undefined" ? ["query", "error", "warn"] : ["error"];
  return new PrismaClient({
    log: logOptions as (Prisma.LogLevel | Prisma.LogDefinition)[],
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
