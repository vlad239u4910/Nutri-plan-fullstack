import { PrismaClient } from "$/generated/prisma";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const db = globalThis.prismaGlobal ?? prismaClientSingleton();
db.user.findFirst({
  where: {
    email: "12345.com",
  },
});

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;
