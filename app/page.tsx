import PlanInfo from "@/containers/PlanInfo";
import ProductList from "@/containers/ProductList";
import Summary from "@/containers/Summary";


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-start justify-start p-4 gap-4 w-full bg-[#f5f5f5]">
      <div className="flex items-start justify-center gap-4 w-full">
        <Summary
          currentPlan='Basic'
          availableCredit='$200'
          productsQuantity='125'
        />
        <PlanInfo />
      </div>
      <ProductList
        products={[]}
      />
    </main>
  );
}
