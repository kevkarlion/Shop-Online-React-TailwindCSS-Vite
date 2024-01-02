
import Layout from "../../Components/Layout";
import { OrdersReady } from "../../Components/OrdersReady"

export function MyOrders() {



  return (
    <>
      <Layout>
        <p className="flex justify-center mb-4 font-bold w-full">My Orders! </p>
          
        <OrdersReady />
      </Layout>
      
    </>
  )
}
  