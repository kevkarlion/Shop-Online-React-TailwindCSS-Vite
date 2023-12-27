/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";
import { useState } from "react";



//Esta variable es la que se importa y se usa en los 
//otros componentes que la requieran
export const MiContext = createContext();


//Esta exportacion la uso en
//donde voy a envolver a los componentes mas 
//importantes, en este caso, App - index.jsx
// eslint-disable-next-line react/prop-types
export const MiContextProvider = ({ children })=> {


    //View single product ready to sale
    const [singleItem, setSingleItem] = useState(false);
    const [buys , setBuys] = useState(0);

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
        const newArray = [...items];
        if (checkoutFirst) {
            setOrdersCheckout([newArray]);
            setCheckoutFirst(false);
        }else {
            const matriz = [...ordersCheckout, newArray];
            setOrdersCheckout(matriz);
        }
        setItems([]);
        setCountCart(0);
        toggleProductDetail();
    }


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


    const [find, setFind] = useState('');

    
    const [clothes, setClothes ] = useState(false);


    //borra un elemento de la orden
    function deletedProduct(itemDeleted){
        const newArray = [...items];
        const index = newArray.findIndex((item)=>(item  === itemDeleted));
        newArray.splice(index, 1);
        setItems(newArray);
    }




    const [login, setLogin] = useState(false);

    const [sign, setSign] = useState({
        mail: '',
        password: ''
    });
    
    


    
    //Guarda en el localStorage
    useEffect(()=>{
        localStorage.setItem('login', JSON.stringify(login));
        if (login === true && sign.mail !== '' && sign.password !== '') {
            localStorage.setItem('sign', JSON.stringify(sign));
            setSignStorage(JSON.parse(localStorage.getItem('sign'))); //signStorage actualizado
        }
    }, [login]);
    

  

    const [signStorage, setSignStorage] = useState({});
    useEffect(()=>{
        if(sign.mail === '' && sign.password === '' ) {
            setSignStorage(JSON.parse(localStorage.getItem('sign'))); //Primera vez que inicia la app
        }
    }, []);

    
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
            checkoutFirst,
            singleItem,
            setSingleItem,
            buys,
            setBuys,
            find,
            setFind,
            clothes,
            setClothes,
            login,
            setLogin,
            sign,
            setSign,
            signStorage
        }}>
            { children }
        </MiContext.Provider>
    )
}