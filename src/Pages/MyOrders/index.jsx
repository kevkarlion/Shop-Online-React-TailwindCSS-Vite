import { useContext } from "react";
import { MiContext } from "../../Components/Context";
import Layout from "../../Components/Layout";
import { OrdersReady } from '../../Components/OrdersReady'; 

function MyOrders() {

    const context = useContext(MiContext);

    return (
      <>
        <Layout>
          MyOrders!
          {context.ordersCheckout &&  <OrdersReady />}
        </Layout>
        
      </>
    )
  }
  
  export default MyOrders
  