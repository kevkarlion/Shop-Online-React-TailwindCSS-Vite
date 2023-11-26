import { useContext } from "react";
import { MiContext } from "../Context";
import { Link } from "react-router-dom";


//Aca va a ir el detalle de las ordenes
//listas

//esto es MyOrders  



export function OrdersReady() {
  
  const context = useContext(MiContext);
  
  const viewBuys = (index)=> {
    context.setSingleItem(true);
    context.setBuys(index);
  }
  
  console.log('viewBuys',context.singleItem);

  return (
    <div className="flex flex-col gap-1 justify-center mt-4  w-auto h-auto">
      {context.ordersCheckout.map((items, index) => (
        <div
          className=" border rounded-md border-black h-auto mt-4 p-4"
          key={index}>
            <Link  
            onClick={()=>  viewBuys(index) }
            to={`/my-orders/${index}`}>
              {items.map((item, subindex) => (
                <div className="flex justify-between" key={subindex}>
                  <p className=" text-xs h-8 w-4/5">{item.title}</p>
                  <p className="text-xs">{item.price}</p>
                </div>
              ))}
            </Link>
        </div>
      ))}
    </div>
  );
}
