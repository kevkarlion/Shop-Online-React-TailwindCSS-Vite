/* eslint-disable react-hooks/exhaustive-deps */
import { MiContext } from "../Context";
import { useContext, useState, useEffect } from "react";
import useApi from "../../API";
import "./styles.css";

export function SearchFiltered() {
  //Custom hook Api
  const items = useApi();


  const [filtered, setFiltered] = useState('');

  const context = useContext(MiContext);

  //Agrega un item al carrito y abre el detalle del pedido
  function addToCart(product) {
    if (context.door === false) {
      context.toggleProductDetail();
    }
    context.increaseCountCart();
    context.addProduct(product);
  }


  //Effect para filtrar por categoria
  useEffect(() => {
    const pathSelect = window.location.pathname.slice(1);
    if (pathSelect === `clothes`){
      setFiltered(`men's clothing`); 
    }
    if (pathSelect === 'jewelery' || pathSelect === 'electronics'){
      setFiltered(pathSelect);
    }
    if (pathSelect === '' ){
      setFiltered(true);
    }
  }, [window.location.pathname]);


  
  //Search - Metodo para buscar por categoria segun el path
  const itemsFiltered = items.filter(
    (product) => product.category === filtered || !!product.category === filtered
  );

  

  //Search
  const valueFind = context.find;

  //Search personalizada del input
  const productFiltered = itemsFiltered.filter((product) =>
    product.title.toLowerCase().includes(valueFind.toLowerCase())
  );

  
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
