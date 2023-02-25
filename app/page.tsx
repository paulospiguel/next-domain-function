import { getProducts } from "./domains/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </main>
  );
}
