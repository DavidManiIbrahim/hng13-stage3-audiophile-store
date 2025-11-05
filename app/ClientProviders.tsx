"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_CONVEX_URL environment variable. " +
    "Please set it in your .env.local file. " +
    "You can get your Convex URL by running 'npx convex dev' or from your Convex dashboard."
  );
}

const convex = new ConvexReactClient(convexUrl);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
