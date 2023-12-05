import { useContext } from "react";
import { MiContext } from "../Context";
import { TfiMoney } from "react-icons/tfi";


//Aca va el detalle del ultimo pedido
//esto es MyOrders/last

export function CheckoutOrders() {
  const context = useContext(MiContext);

  const lastItem = context.ordersCheckout.length - 1;

  const totalCheckout = ()=> {
    let total = 0;
    context.ordersCheckout[lastItem].forEach((item) => {
      total += item.price;
    });
    return total
  }
  

  return (
    <div className="flex flex-col gap-1 justify-center mt-4  w-[460px] h-auto items-center">
      {context.ordersCheckout[lastItem].map((items, index) => (
        <div
          className="grid grid-cols-3 w-auto h-auto items-center mb-4 mt-4 "
          key={index}
        >
          <img className="w-16 justify-self-center	" src={items.image} alt="" />
          <p className=" text-sm w-auto ">{items.title}</p>
          <p className="flex text-base font-semibold justify-self-end	pr-6">
            <span><TfiMoney /></span>
             {items.price}
          </p>
        </div>
      ))}
      <div>
        <p className="text-base font-semibold">Total: ${totalCheckout()}</p>
      </div>
    </div>
  );
}
