import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { getPayload } from "payload";
import configPromise from "@payload-config";

/**
 * Page component that fetches the "categories" collection and renders it as formatted JSON.
 *
 * Fetches a Payload CMS instance using the shared configuration, queries the "categories"
 * collection, and returns a <div> containing the pretty-printed JSON of the query result.
 *
 * @returns A JSX <div> element containing the pretty-printed JSON representation of the "categories" query result.
 */
export default async function Home() {
  const payload = await getPayload({ config: configPromise });

  const data = await payload.find({ collection: "categories" });
  return <div>{JSON.stringify(data, null, 2)}</div>;
}