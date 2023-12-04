import { useContext } from "react";
import { MiContext } from "../Context";


//Detalles unitarios de pedidos ya realizados
export function ViewBuys() {


  const context = useContext(MiContext);

  const totalCheckout = ()=> {
    let total = 0;
    context.ordersCheckout[context.buys].forEach((item) => {
      total += item.price;
    });
    return total
  }

  
  return (
    <div className="flex flex-col gap-1 justify-center mt-4  w-[460px] h-auto">
      {context.ordersCheckout[context.buys].map((items, index) => (
            <div
              className="grid grid-cols-3  w-auto h-auto items-center  mb-4 mt-4 "
              key={index} >
              <img
                className="w-16 justify-self-center	"
                src={items.image}
                alt=""
              />
              <p className=" text-sm w-auto ">{items.title}</p>
              <p className="flex text-base font-semibold justify-self-end	pr-8">
                {" "}
                $ {items.price}
              </p>
            </div>
      ))}
      <div>
        <p className="text-base font-semibold">Total: $ {totalCheckout()}</p>
      </div>
    </div>
  );
}
