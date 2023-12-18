/* eslint-disable react-hooks/exhaustive-deps */

import { useContext } from "react";
import { MiContext } from "../Context";
import { useEffect, useState } from "react";
import useApi from "../../API";

//hook personalizado de SearchFiltered
export function useFiltered() {
  const items = useApi();
  const context = useContext(MiContext);

  //Agrega un item al carrito y abre el detalle del pedido
  function addToCart(product) {
    if (context.door === false) {
      context.toggleProductDetail();
    }
    context.increaseCountCart();
    context.addProduct(product);
  }

  const [filtered, setFiltered] = useState("");
  const pathSelect = window.location.pathname;

  //Effect para filtrar por categoria
  useEffect(() => {
    console.log(pathSelect);
    if (pathSelect === `/shop-online-react-tailwindcss-vite/clothes`) {
      setFiltered(`men's clothing`);
    }
    if (pathSelect === "/shop-online-react-tailwindcss-vite/jewelery") {
      setFiltered(`jewelery`);
    }
    if (pathSelect === "/shop-online-react-tailwindcss-vite/electronics") {
      setFiltered(`electronics`);
    }
    if (
      pathSelect === "/shop-online-react-tailwindcss-vite/" ||
      pathSelect === "/shop-online-react-tailwindcss-vite"
    ) {
      setFiltered(true);
    }
  }, [window.location.pathname]);

  //Search - Metodo para buscar por categoria segun el path
  const itemsFiltered = items.filter(
    (product) =>
      product.category === filtered || !!product.category === filtered
  );

  //Search - input del usuario
  const valueFind = context.find;

  //Search filtrada segun el input
  const productFiltered = itemsFiltered.filter((product) =>
    product.title.toLowerCase().includes(valueFind.toLowerCase())
  );

  return { addToCart, productFiltered };
}
