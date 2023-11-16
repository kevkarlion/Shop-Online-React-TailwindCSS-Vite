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
    const [items, setItems] = useState([]);

    //open detail
    const [door, setDoor] = useState(false);


    //Add product a product detail
    function addProduct(product){
        const newArray = [...items, product];
        setItems(newArray);
    }

    //Incrementa el contador del carrito
    function increaseCountCart (){
        setCountCart(countCart + 1);
    }

    function openProductDetail(){
        setDoor(door === false);
    }

    

    //borra un elemento de la orden
    function deletedProduct(itemDeleted){
        const newArray = [...items];
        const index = newArray.findIndex((item)=>(item  === itemDeleted));
        newArray.splice(index, 1);
        setItems(newArray);
    }
    
    return (
        <MiContext.Provider value={{
            countCart,
            setCountCart,
            items,
            setItems,
            addProduct,
            increaseCountCart,
            deletedProduct,
            openProductDetail,
            door,
            setDoor
        }}>
            { children }
        </MiContext.Provider>
    )
}