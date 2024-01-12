import { useContext } from "react";
import { MiContext } from "../Context";
import { NavLink } from "react-router-dom";
import { TfiMoney } from "react-icons/tfi";
import { IoLogoUsd } from "react-icons/io";

import "./styles.css";

//Menu desplegable para hacer el checkout

export const ProductDetail = () => {
  const context = useContext(MiContext);

  const itemDeleted = (itemDeleted) => {
    context.deletedProduct(itemDeleted);
    context.decreaseCountCart();
  };

  //setSIngleItem false para que
  //no interfiera el componente ViewBuys
  const checkout = () => {
    context.toggleProductDetail();
    if (context.items.length > 0) {
      context.addOrderCheckout();
      context.setSingleItem(false);
    }
  };

  const totalCheckout = () => {
    let total = 0;
    context.items.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="content-side-nav">
      <div className="flex justify-between  rounded-xl 	p-2 w-[250px] fixed bg-white">
        <span className="font-bold ">My Order</span>
        <span
          className="cursor-pointer"
          onClick={() => context.toggleProductDetail()}
        >
          {/* Icono para cerrar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <nav className="side-nav">
        {context.items.map((item) => (
          <div
            key={item.id}
            className="flex mt-6 mb-2 p-2 justify-center items-center w-full "
          >
            <div className="flex items-center justify-center w-[150px] pr-2">
              <figure className="w-16 h-18 ">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </figure>
              <p className="text-xs pl-4 w-28">{item.title}</p>
            </div>
            <p className="text-sm  font-bold flex">
              <span>
                <TfiMoney />
              </span>
              {item.price}
            </p>
            {/* Icono para quitar el item */}
            <span
              className="flex cursor-pointer  pl-2 justify-end w-auto"
              onClick={() => itemDeleted(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 border-solid border-black border-[1px] rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        ))}
      </nav>
      {/* Si hay elementos en el carrito, muestro el total */}
      {context.items.length > 0 && (
        <p className="flex justify-center text-base items-center font-semibold  border-solid border-black bg-black border-[1px] w-[120px] h-[35px] rounded-lg text-white mt-auto mb-2 ml-auto mr-auto">
          Total <IoLogoUsd style={{ marginLeft: "8px" }} />
          {totalCheckout()}
        </p>
      )}
      <button
        className="button p-4 w-full  border-transparent rounded-lg
       bg-black text-slate-50 font-bold"
      >
        <NavLink to="/my-orders/last" onClick={() => checkout()}>
          Checkout
        </NavLink>
      </button>
    </div>
  );
};
