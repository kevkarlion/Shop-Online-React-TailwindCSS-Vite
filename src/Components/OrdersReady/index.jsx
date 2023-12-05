import { useContext } from "react";
import { MiContext } from "../Context";
import { Link } from "react-router-dom";
import { TfiMoney } from "react-icons/tfi";

//Aca va a ir el detalle de las ordenes
//listas

//esto es MyOrders

export function OrdersReady() {
  const context = useContext(MiContext);

  //Recibe el index de la compra,
  //veo el array con su indice, con todos los elementos de dicha compra
  const viewBuys = (index) => {
    context.setSingleItem(true);
    context.setBuys(index);
  };

  const price = (items) => {
    let total = 0;
    items.forEach((e) => {
      total = total + e.price;
    });
    console.log(total);
    return total;
  };

  const date = new Date();

  return (
    <div className="flex flex-col gap-1 justify-center mt-4  w-[530px] h-32">
      {context.ordersCheckout.map((items, index) => (
        <div
          className=" border rounded-md border-black h-full mt-4 p-4"
          key={index}
        >
          <Link
            className="flex justify-between"
            onClick={() => viewBuys(index)}
            to={`/my-orders/${index}`}
          >
            <div className="flex flex-col">
              <p>{date.toLocaleDateString()}</p>
              <p> {items.length} Articulos </p>
            </div>
            <p className="flex items-center	 ">
              <TfiMoney /> {price(items)}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
