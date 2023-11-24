import { useContext } from "react";
import { MiContext } from "../Context";

//Aca va el detalle de 1 checkout
//esto es MyOrders/last

export function CheckoutOrders() {
  const context = useContext(MiContext);

  return (
    <div className="flex flex-col gap-1 justify-center mt-4  w-[460px] h-auto">
      {context.ordersCheckout.map((items, index) => (
        <div className="h-auto p-2 mt-8 " key={index}>
          {items.map((item, subindex) => (
            <div
              className="grid grid-cols-3  w-auto h-auto items-center  mb-4 mt-4 "
              key={subindex} >
              <img
                className="w-16 justify-self-center	"
                src={item.image}
                alt=""
              />
              <p className=" text-sm w-auto ">{item.title}</p>
              <p className="flex text-base font-semibold justify-self-end	pr-8">
                {" "}
                $ {item.price}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
