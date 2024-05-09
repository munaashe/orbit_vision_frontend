import PlanInfo from "@/containers/PlanInfo";
import ProductList from "@/containers/ProductList";
import Summary from "@/containers/Summary";
import { unstable_noStore as noStore } from 'next/cache'


export default async function Home() {
  noStore()

  const baseURL: any = process.env.NEXT_PUBLIC_BASE_API_URL
  async function getAccountDetails() {
    const res = await fetch(`${baseURL}/account`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }



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