import PlanInfo from "@/containers/PlanInfo";
import ProductList from "@/containers/ProductList";
import Summary from "@/containers/Summary";
import { products } from "@/data/products";
import { unstable_noStore as noStore } from 'next/cache'
import CryptoJS from 'crypto-js';

interface AccountDetails {
  shop_name: string;
  access_token: string;
}
const initialState: AccountDetails = {
  shop_name: '',
  access_token: '',
}


export default async function Home() {
  noStore()
  const secretKey: any = process.env.ENCRYPT_SECRET_KEY

  const baseURL: any = process.env.BASE_API_URL
  async function getAccountDetails() {
    const res = await fetch(`${baseURL}/api/v1/account`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const accountData = await getAccountDetails()
  console.log(accountData);


  const plaintext = 'munopeeenga';

  const ciphertext = CryptoJS.AES.encrypt(plaintext, secretKey).toString();
  const decryptedText = CryptoJS.AES.decrypt(ciphertext, secretKey).toString(CryptoJS.enc.Utf8);
 
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