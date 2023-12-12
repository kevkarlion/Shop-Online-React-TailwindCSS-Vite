import { useContext } from "react";
import { IoLogoUsd } from "react-icons/io";

import { MiContext } from "../Context";

//Detalles unitarios de pedidos ya realizados
export function ViewBuys() {
  const context = useContext(MiContext);

  const totalCheckout = () => {
    let total = 0;
    context.ordersCheckout[context.buys].forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="flex flex-col gap-1 justify-center mt-4  w-[460px] h-auto items-center">
      {context.ordersCheckout[context.buys].map((items, index) => (
        <div
          className="grid grid-cols-3  w-full h-auto items-center  mb-4 mt-4 "
          key={index}
        >
          <img className="w-16 justify-self-end mr-4 h-auto" src={items.image} alt="" />
          <p className=" text-sm w-auto ">{items.title}</p>
          <p className="flex text-base font-semibold justify-self-end	pr-8">
            {" "}
            $ {items.price}
          </p>
        </div>
      ))}
      <div>
        <p className="flex justify-center text-base items-center font-semibold  border-solid border-black bg-black border-[1px] w-[120px] h-[35px] rounded-lg text-white mt-4 mb-4">
          Total <IoLogoUsd style={{marginLeft: "8px"}}/> {totalCheckout()}
        </p>
      </div>
    </div>
  );
}
