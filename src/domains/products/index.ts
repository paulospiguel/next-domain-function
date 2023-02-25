import { makeDomainFunction } from "domain-functions";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

const inputSchema = z.object({
  quantity: z.number().positive().default(10),
  pages: z.number().positive().default(1),
});

export const getProducts = makeDomainFunction(inputSchema)(
  async ({ quantity = 10, pages = 1 }) => {
    const params = new URLSearchParams({
      per_page: String(quantity),
      page: String(pages),
    });

    const result = await fetch(`https://reqres.in/api/products?${params}`);

    const { data, ...rest } = await result.json();

    return {
      products: z.array(productSchema).parse(data),
      ...rest,
    };
  }
);

/*** NOTE: Traditional way */
/*
const inputSchema = z
  .object({
    quantity: z.number().optional(),
    pages: z.number().optional(),
  });

export const getProducts = async (
  inputParams: z.infer<typeof inputSchema>
) => {
  const { quantity = 10, pages = 1 } = inputSchema.parse(inputParams) ?? {};

  const params = new URLSearchParams({
    per_page: String(quantity),
    page: String(pages),
  });

  const result = await fetch(`https://reqres.in/api/products?${params}`);

  const { data, ...rest } = await result.json();

  return {
    products: z.array(productSchema).parse(data),
    ...rest,
  };
};
*/
