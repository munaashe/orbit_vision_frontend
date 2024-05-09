import PlanInfo from "@/containers/PlanInfo";
import ProductList from "@/containers/ProductList";
import Summary from "@/containers/Summary";
import { getAccountDetails } from "@/utils/fetchData";

export default async function Home() {

  const accountData = await getAccountDetails()
  return (
    <div className=" p-4 w-full bg-[#e1e1e1]">
      <div className="flex flex-grow items-start justify-center gap-4 w-full">
        <Summary
          currentPlan='Basic'
          availableCredit='$200'
          productsQuantity='125'
        />
        <PlanInfo
          shopName={accountData[0]?.shop_name}
          accessToken={accountData[0]?.access_token}
        />
      </div>
      <ProductList />
    </div>
  );
}