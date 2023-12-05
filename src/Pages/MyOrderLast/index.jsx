import { useContext } from "react";
import { MiContext } from "../../Components/Context";
import Layout from "../../Components/Layout";
import { CheckoutOrders } from "../../Components/CheckoutOrders";
import { ViewBuys } from "../../Components/ViewBuys";

// import { OrdersReady } from "../../Components/OrdersReady";
import { Link } from "react-router-dom";






export default function MyOrderLast() {
  const context = useContext(MiContext);

 


  return (
    <>
      <Layout>

          <p
            className=" flex w-[160px] justify-between font-bold"
          >
            <span className="cursor-pointer">
              <Link to='/my-orders'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </Link>
            </span>Go to MyOrders!
          </p>
      
        
        <div>
          {context.singleItem ?  <ViewBuys /> : 
          context.ordersCheckout && <CheckoutOrders /> }
        </div>

      </Layout>
    </>
  );
}
