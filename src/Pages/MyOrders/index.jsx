import Layout from "../../Components/Layout";
import { OrdersReady } from "../../Components/OrdersReady"

function MyOrders() {


    return (
      <>
        <Layout>
          <p className="flex justify-center mb-4 font-bold w-full">My Orders! </p>
           
          <OrdersReady />
        </Layout>
        
      </>
    )
  }
  
  export default MyOrders
  