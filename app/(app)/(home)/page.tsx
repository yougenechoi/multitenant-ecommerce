"use client";
// <-- hooks can only be used in client components
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function Home() {
  const trpc = useTRPC();
  const categories = useQuery(trpc.categories.getMany.queryOptions());
  return <div className="home-container">home</div>;
}
