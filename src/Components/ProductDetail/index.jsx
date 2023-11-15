import { useContext } from "react";
import { MiContext } from "../Context";
import "./styles.css";

export const ProductDetail = () => {
  const context = useContext(MiContext);

  const itemDeleted =(itemDeleted)=>{
    context.deletedProduct(itemDeleted);
  }

  return (
    <div className="content-side-nav">
      <nav className="side-nav">
        <span>My Order</span>
        {context.items.map((item) => (
          <div key={item.id} className="flex mt-8 m-2 justify-center items-center w-full">
            <div className="flex items-center justify-center ml-2">
              <figure className="w-16 h-18  mr-2">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </figure>
              <p className="text-xs pl-2 mr-4">{item.title}</p>
            </div>
            <p className="text-sm  font-bold mr-2">${item.price}</p>
            <span className="mr-4 cursor-pointer" onClick={() => itemDeleted(item)}>
              x
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};
