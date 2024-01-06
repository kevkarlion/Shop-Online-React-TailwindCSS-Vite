
import Layout from "../../Components/Layout";
import { OrdersReady } from "../../Components/OrdersReady"

export default function MyOrders() {



  return (
    <>
      <Layout>
        <p className="flex justify-center mb-4 mt-4 font-semibold w-auto text-3xl border-b-2 border-green-400	 p-2 ">My Orders </p>
          
        <OrdersReady />
      </Layout>
      
    </>
  )
}
  