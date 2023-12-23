import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyAPIRoute: publicProcedure.query(() => {
        return "Hello";
    })
});

export type Approuter = typeof appRouter;