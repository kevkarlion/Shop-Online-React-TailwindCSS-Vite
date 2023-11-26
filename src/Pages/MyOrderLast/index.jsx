import { useContext } from "react";
import { MiContext } from "../../Components/Context";
import Layout from "../../Components/Layout";
import { CheckoutOrders } from "../../Components/CheckoutOrders";
import { ViewBuys } from "../../Components/ViewBuys";

// import { OrdersReady } from "../../Components/OrdersReady";
import { NavLink } from "react-router-dom";






export default function MyOrderLast() {
  const context = useContext(MiContext);

  console.log('myorderLast',context.singleItem);


  return (
    <>
      <Layout>

        <NavLink to='/my-orders'>
          <p
            className="cursor-pointer"
          >
            go to MyOrders!
          </p>
        </NavLink>
      
        
        <div>
          {context.singleItem ?  <ViewBuys /> : 
          context.ordersCheckout && <CheckoutOrders /> }
        </div>

      </Layout>
    </>
  );
}
