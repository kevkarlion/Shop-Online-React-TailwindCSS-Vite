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



    //array con datos de cada order que haga en el checkout
    const [ordersCheckout, setOrdersCheckout] = useState([]);
    const [checkoutFirst, setCheckoutFirst] = useState(true);


    //f que guarda los checkout listos para 
    //el MyOrders
    function addOrderCheckout (){
        if (checkoutFirst) {
            const newArray = [...items];
            setOrdersCheckout([newArray]);
            setCheckoutFirst(false);
        }else {
            const newArray = [...items];
            const mArray = [ordersCheckout, [newArray]];
            setOrdersCheckout(mArray);
        }
        setItems([]);
        setCountCart(0);
    }

    console.log('orders checkout ',ordersCheckout);

    //Add product a product detail
    function addProduct(product){
        const newArray = [...items, product];
        setItems(newArray);
    }

    //Incrementa el contador del carrito
    function increaseCountCart (){
        setCountCart(countCart + 1);
    }

    function decreaseCountCart (){
        setCountCart(countCart - 1);
    }


    //open detailProduct
    const [door, setDoor] = useState(false);
    
    function toggleProductDetail(){
        setDoor(!door);
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
            decreaseCountCart,
            deletedProduct,
            toggleProductDetail,
            door,
            setDoor,
            addOrderCheckout,
            ordersCheckout,
            checkoutFirst
        }}>
            { children }
        </MiContext.Provider>
    )
}