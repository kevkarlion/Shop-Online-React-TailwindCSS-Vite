import { useContext } from "react";
import { MiContext } from "../../Components/Context";
import Layout from "../../Components/Layout";
import { CheckoutOrders } from "../../Components/CheckoutOrders";

// import { OrdersReady } from "../../Components/OrdersReady";
import { NavLink } from "react-router-dom";

export default function MyOrderLast() {
  const context = useContext(MiContext);

  // const [orders, setOrders] = useState(false);

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
          {context.ordersCheckout && <CheckoutOrders />}
        </div>
      </Layout>
    </>
  );
}
