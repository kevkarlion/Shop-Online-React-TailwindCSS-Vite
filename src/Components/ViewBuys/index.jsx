import { useContext } from "react";
import { MiContext } from "../Context";



export function ViewBuys() {


  const context = useContext(MiContext);

  
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
    </div>
  );
}
