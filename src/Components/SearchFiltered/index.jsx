import { useFiltered } from '../useFiltered';
import "./styles.css";

export function SearchFiltered() {


  //custom hook useFilteder
  const {addToCart, productFiltered } = useFiltered();

  
  return (
    <div className="container-grid">
      {productFiltered.map((item) => (
        <div key={item.id} className="bg-white h-auto rounded-lg">
          <figure className="relative  w-full h-auto">
            <span
              className="absolute bottom-0 left-0 bg-white/60 rounded-lg  
                    text-black text-xs mb-6 ml-2 px-3 py-0.5"
            >
              {item.category}
            </span>
            <img
              className="w-full h-full object-cover rounded-lg"
              src={item.image}
              alt="Headphones"
            />
            <div
              className="absolute top-0 right-0 flex justify-center items-center 
                        bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer"
              onClick={() => addToCart(item)}
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
}
