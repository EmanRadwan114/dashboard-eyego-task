import DisplayedProducts from "./components/DisplayedProducts";
import ProductsFilter from "./components/ProductsFilter";
import { getAllCategories } from "./services/categories.services";
import { getProducts } from "./services/products.services";

export default async function ProductsPage() {
  const [categoriesResponse, productsResponse] = await Promise.allSettled([
    getAllCategories(),
    getProducts(),
  ]);

  const categoriesData =
    categoriesResponse.status === "fulfilled" ? categoriesResponse.value : [];

  const productsData =
    productsResponse.status === "fulfilled"
      ? productsResponse.value.products
      : [];

  return (
    <div className="space-y-8 w-full">
      <header className="px-4 py-6 flex flex-col md:flex-row gap-4 bg-white shadow-md rounded-md">
        <ProductsFilter categories={categoriesData} />
      </header>

      <DisplayedProducts products={productsData} />
    </div>
  );
}
