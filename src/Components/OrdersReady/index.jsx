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
    <div className="flex flex-col items-center gap-1 justify-center mt-4  w-[360px] h-auto">
      {context.ordersCheckout.map((items, index) => (
        <div
          className="flex items-center justify-between w-full  border rounded-lg border-black h-full p-4 m-4"
          key={index}
        >
          <Link
            className="flex justify-between grow p-4 items-center"
            onClick={() => viewBuys(index)}
            to={`/my-orders/${index}`}
          >
            <div className="flex flex-col items-center border-solid border-black bg-black border-[1px] w-[120px] rounded-t-lg rounded-b-lg">
              <p className="flex justify-center w-full text-white ">
                {date.toLocaleDateString()}
              </p>
              
              {items.length === 1 ? (
                <p className="flex font-bold text-lg text-white w-full justify-center">
                  {items.length} Artículo
                </p>
              ) : (
                <p className="flex font-bold text-lg text-white w-full justify-center">
                  {items.length} Artículos
                </p>
              )}
            </div>
            <p className="flex items-center justify-center	font-bold border-solid border-black bg-black border-[1px] rounded-lg text-white w-auto p-2 h-auto ">
              Total: <TfiMoney /> {price(items)}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
