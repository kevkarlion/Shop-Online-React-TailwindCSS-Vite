//Custom Hook API
import useApi from "../../API";
import { useContext } from "react";
import { MiContext } from "../Context";

const Card = () => {
  //Custom hook Api
  const items = useApi();
  const context = useContext(MiContext);

  function addToCart(product){
    context.increaseCountCart(); 
    context.addProduct(product);
  }

  return (
    <div className="grid gap-4 grid-cols-4 h-auto w-auto mr-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white cursor-pointer w-36 h-auto rounded-lg"
        >
          <figure className="relative  w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs mb-6 ml-2 px-3 py-0.5">
              {item.category}
            </span>
            <img
              className="w-full h-40 object-cover rounded-lg"
              src={item.image}
              alt="Headphones"
            />
            <div
              className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
              onClick={()=> addToCart(item)}
            >
              +
            </div>
          </figure>
          <p className="flex justify-between h-auto mb-1 ">
            <span className="text-xs font-light">{item.title}</span>
            <span className="text-sm font-medium">{item.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
