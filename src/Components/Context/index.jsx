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

    const [countCart, setCountCart] = useState(0);
    console.log(countCart);
    return (
        <MiContext.Provider value={{
            countCart,
            setCountCart
        }}>
            { children }
        </MiContext.Provider>
    )
}