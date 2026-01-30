import { DEFAULT_TAG_LIMIT } from "@/constant";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";

export const tagsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        cursor: z.number().default(1),
        limit: z.number().default(DEFAULT_TAG_LIMIT),
      }),
    )
    .query(async ({ ctx, input }) => {
      const data = await ctx.payload.find({
        collection: "tags",
        page: input.cursor,
        limit: input.limit,
      });

      // Artificial loading
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      return data;
    }),
});
