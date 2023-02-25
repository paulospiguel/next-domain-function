//import { getProducts } from "../domains/products";

import { getProducts } from "../domains/products";

export default async function Home() {
  const products = await getProducts({});

  return (
    <div className="w-full h-full p-8 max-h-[78vh] overflow-auto">
      <pre className="m-auto bg-slate-700 text-gray-100 rounded">
        {JSON.stringify(products, null, 2)}
      </pre>
    </div>
  );
}
