import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

const categories = [
  // ... paste all your categories from seed.ts
];

/**
 * Seeds predefined categories and their subcategories into the Payload CMS.
 *
 * @returns A JSON response: `{ success: true }` if all categories were created successfully, or `{ error: string }` with HTTP status 500 if an error occurred.
 */
export async function GET() {
  try {
    const payload = await getPayload({ config });

    for (const category of categories) {
      const parentCategory = await payload.create({
        collection: "categories",
        data: {
          name: category.name,
          slug: category.slug,
          color: category.color,
          parent: null,
        },
      });

      for (const subCategory of category.subcategories || []) {
        await payload.create({
          collection: "categories",
          data: {
            name: subCategory.name,
            slug: subCategory.slug,
            parent: parentCategory.id,
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}