import { makeDomainFunction } from "domain-functions";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

export const getProducts = makeDomainFunction(
  z.object({
    quantity: z.number().positive(),
  })
)(async ({ quantity }) => {
  const products = fetch(`https://reqres.in/api/products?${quantity}`).then(
    (res) => res.json()
  );

  return z.array(productSchema).parse(products);
});
