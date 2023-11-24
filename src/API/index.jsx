//API Products Cards

import { useEffect, useState } from "react";
// import { Card } from '../Components/Card';

// eslint-disable-next-line react-refresh/only-export-components
const API = 'https://fakestoreapi.com/products';



const useApi = () => {
    
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

    return items;
}   

export default useApi;