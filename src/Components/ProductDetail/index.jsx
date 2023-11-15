import { useContext } from "react";
import { MiContext } from "../Context";
import "./styles.css";

export const ProductDetail = () => {
  const context = useContext(MiContext);

  return (
    <div className="content-side-nav">
      <nav className="side-nav scroll-box">
        <span>My Order</span>
            {context.items.map((item) => (
            <div key={item.id} className="flex mt-8 justify-center items-center ">
                <div className="flex items-center justify-center ml-2">
                    <figure className="w-14 h-16 ml-2 mr-2">
                        <img
                            src={item.image}
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <p className="text-xs text-start pl-2">{item.title}</p>
                </div>
                <p className="text-sm  font-bold mr-2">${item.price}</p>
                <span className="mr-4">x</span>
            </div>
        ))}
      </nav>
    </div>
  );
};
