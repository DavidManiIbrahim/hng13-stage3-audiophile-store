import { query, mutation } from "./_generated/server";
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

// Get product by name
export const getByName = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const product = await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();
    return product;
  },
});

// Create or get product by name
export const createOrGet = mutation({
  args: {
    name: v.string(),
    price: v.number(),
    description: v.string(),
    image: v.string(),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if product already exists
    const existing = await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();
    
    if (existing) {
      return existing._id;
    }
    
    // Create new product
    return await ctx.db.insert("products", {
      name: args.name,
      price: args.price,
      description: args.description,
      image: args.image,
      category: args.category,
    });
  },
});
