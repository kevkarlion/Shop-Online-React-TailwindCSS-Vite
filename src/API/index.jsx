//API Products Cards

import { useEffect, useState } from "react";

const API = 'https://fakestoreapi.com/products';



const Api = () => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        const miApi = async () => {
            try {
                const data = await fetch(API);
                const res = await data.json();
                setItems(res);
            } catch (error) {
                console.log(error);
            }
        };
        miApi();
    }, []);

    return (
        console.log(items)
    );
}   

export default Api;