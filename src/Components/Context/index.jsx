import { createContext } from "react";
import { useState } from "react";


//Esta variable es la que se importa y se usa en los 
//otros componentes que la requieran
export const MiContext = createContext();


//Esta exportacion la uso en
//donde voy a envolver a los componentes mas 
//importantes, en este caso, App - index.jsx
// eslint-disable-next-line react/prop-types
export const MiContextProvider = ({ children })=> {

    //Count add to cart
    const [countCart, setCountCart] = useState(0);

    //item add to cart
    const [item, setItem] = useState([]);

    console.log(countCart);
    console.log(item);


    //Add product a product detail
    function addProduct(product){
        const newArray = [...item, product];
        setItem(newArray);
    }

    function increaseCountCart (){
        setCountCart(countCart + 1);
    }
    
    return (
        <MiContext.Provider value={{
            countCart,
            setCountCart,
            item,
            setItem,
            addProduct,
            increaseCountCart
        }}>
            { children }
        </MiContext.Provider>
    )
}