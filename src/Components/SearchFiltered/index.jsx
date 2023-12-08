import { useFiltered } from "../useFiltered";
import { TfiMoney } from "react-icons/tfi";

import "./styles.css";

export function SearchFiltered() {
  //custom hook useFilteder
  const { addToCart, productFiltered } = useFiltered();

  return (
    <div className="container-grid">
      {productFiltered.map((item) => (
        <div key={item.id} className="flex flex-col bg-white h-full rounded-lg w-[160px]  duration-300 hover:shadow-2xl group transform transition-transform hover:scale-105 ease-in-out overflow-hidden">
          <figure className="relative w-full h-full  p-4	transform group-hover:scale-105 transition-transform">
         
            <img
              className="transform group-hover:scale-105 transition-transform w-full h-full object-contain rounded-lg pb-2"
              src={item.image}
              alt="Product Image"
            />
            <div
              className="transform group-hover:scale-105 transition-transform absolute top-0 right-0 flex justify-center items-center 
                        bg-white w-6  h-6 rounded-full border-[1px] border-black  m-2 p-1 cursor-pointer "
              onClick={() => addToCart(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="transform group-hover:scale-105 transition-transform w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </figure>
          <span
              className="flex justify-center items-center w-auto h-auto  transform group-hover:scale-105 transition-transform bg-white text-sm font-light	text-black	border-y-[1px] border-black py-[2px]	"
            >
              {item.category}
            </span>
          <p className=" flex flex-col justify-center items-center h-full  mt-4 rounded-b-lg">
            <span className=" flex items-center  justify-center text-xs font-light mb-4 p-2">{item.title}</span>
            <span className="flex justify-center items-center text-sm font-medium mt-auto w-full bg-black text-white rounded-b-lg transform group-hover:scale-105 transition-transform"> <TfiMoney /> {item.price}</span>
          </p>
        </div>
        
      ))}
    </div>
  );
}
