import * as trpc from "@trpc/server";
import { z } from "zod";

export const appRouter = trpc
  .router()
  .query("health", {
    async resolve() {
      return { status: "ok" };
    },
  })
  .mutation("sign-up", {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6).max(50),
    }),
    async resolve(req) {
      console.log("req", req);

      return { id: req.input.email };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
