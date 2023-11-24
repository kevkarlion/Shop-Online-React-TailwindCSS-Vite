import { useContext } from "react";
import { MiContext } from "../Context";
import "./styles.css";
import { NavLink } from "react-router-dom";

export const ProductDetail = () => {
  const context = useContext(MiContext);

  const itemDeleted = (itemDeleted) => {
    context.deletedProduct(itemDeleted);
    context.decreaseCountCart();
  };

  const checkout = ()=> {
    if (context.items.length > 0 ) {
      context.addOrderCheckout();
    }
  }

  return (
    <div className="content-side-nav">
      <div className="flex justify-between m-4">
        <span>My Order</span>
        <span
          className="cursor-pointer"
          onClick={() => context.toggleProductDetail()}
        >
          x
        </span>
      </div>
      <nav className="side-nav">
        {context.items.map((item) => (
          <div
            key={item.id}
            className="flex mt-8 mb-4 p-2 justify-center items-center w-full"
          >
            <div className="flex items-center justify-center ml-2 ">
              <figure className="w-16 h-18  mr-2">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </figure>
              <p className="text-xs pl-2 mr-4 w-28">{item.title}</p>
            </div>
            <p className="text-sm  font-bold mr-2">${item.price}</p>
            <span
              className="mr-4 cursor-pointer "
              onClick={() => itemDeleted(item)}
            >
              x
            </span>
          </div>
        ))}
      </nav>
      <button className="button p-4 m-2 mt-auto border rounded-lg
       bg-black text-slate-50">
        <NavLink to="my-orders/last" 
        onClick={()=> checkout() }>Checkout</NavLink>
      </button>
    </div>
  );
};
