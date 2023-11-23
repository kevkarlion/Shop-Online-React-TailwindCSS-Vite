import { useContext } from "react";
import { MiContext } from "../../Components/Context";
import Layout from "../../Components/Layout";
import { CheckoutOrders } from '../../Components/CheckoutOrders'; 

function MyOrders() {

    const context = useContext(MiContext);

    return (
      <>
        <Layout>
          MyOrders!
          {context.ordersCheckout &&  <CheckoutOrders />}
        </Layout>
        
      </>
    )
  }
  
  export default MyOrders
  