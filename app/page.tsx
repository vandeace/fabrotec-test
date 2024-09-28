import Filter from "./components/filter";
import ProductList from "./components/product-list";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-black py-4">Product List</h1>
      <Filter />
      <ProductList />
    </div>
  );
}
