import PlanInfo from "@/containers/PlanInfo";
import ProductList from "@/containers/ProductList";
import Summary from "@/containers/Summary";
import { products } from "@/data/products";


export default function Home() {
  return (
    <div className=" p-4 w-full bg-[#e1e1e1]">
      <div className="flex flex-grow items-start justify-center gap-4 w-full">
        <Summary
          currentPlan='Basic'
          availableCredit='$200'
          productsQuantity='125'
        />
        <PlanInfo />
      </div>
      <ProductList
        products={products}
      />
    </div>
  );
}