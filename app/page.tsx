import PlanInfo from "@/components/PlanInfo";
import ProductList from "@/components/ProductList";
import Summary from "@/components/Summary";


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-4 gap-4 w-full bg-[#f5f5f5]">
      <div className="flex items-center h-1/2 gap-4 w-full">
        <Summary />
        <PlanInfo />
      </div>
      <ProductList />
    </main>
  );
}
