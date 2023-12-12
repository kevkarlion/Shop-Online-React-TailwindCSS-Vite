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
      <div className="flex justify-between m-4">
        <span className="font-bold">My Order</span>
        <span
          className="cursor-pointer"
          onClick={() => context.toggleProductDetail()}
        >
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
            className="flex mt-8 mb-4 p-4 justify-start items-center w-full"
          >
            <div className="flex items-center justify-center w-[225px] pr-2">
              <figure className="w-16 h-18">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </figure>
              <p className="text-xs pl-2 mr-2 w-28">{item.title}</p>
            </div>
            <p className="text-sm  font-bold flex">
              <span>
                <TfiMoney />
              </span>
              {item.price}
            </p>
            <span
              className="pl-2 cursor-pointer "
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
      {context.items.length > 0 && (
        <p className="flex justify-center text-base items-center font-semibold  border-solid border-black bg-black border-[1px] w-[120px] h-[35px] rounded-lg text-white mt-auto mb-4 ml-auto mr-auto">
          Total <IoLogoUsd style={{marginLeft: "8px"}}/>{totalCheckout()}
        </p>
        )
      }
      <button
        className="button p-4 m-2  border rounded-lg
       bg-black text-slate-50 font-bold"
      >
        <NavLink to="/my-orders/last" onClick={() => checkout()}>
          Checkout
        </NavLink>
      </button>
    </div>
  );
};
