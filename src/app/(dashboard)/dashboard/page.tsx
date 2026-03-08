import ProductBarChart from "./components/ProductBarChart";
import { getProducts } from "../products/services/products.services";

export default async function DashboardPage() {
  const productsData = await getProducts();

  return (
    <div className="w-full">
      <ProductBarChart products={productsData.products} />
    </div>
  );
}
