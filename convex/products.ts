import { query } from "./_generated/server";
import { v } from "convex/values"; // ✅ missing import added

// Get all products
export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

// Get products by category
export const getByCategory = query({
  args: { category: v.string() }, // validate string input
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();
  },
});
