import Layout from '../../Components/Layout';
import Card from "../../Components/Card";
import { ProductDetail } from '../../Components/ProductDetail';
import { MiContext } from '../../Components/Context';
import { SearchProducts } from '../../Components/SearchProducts';
import { SearchClothes } from '../../Components/SearchClothes';

import { useContext } from 'react';


function Home() {

  const context = useContext(MiContext);

  const path = window.location.pathname;
  console.log(path);

 
 
  
  return (





    <>
      <Layout>
        <p className=' text-lg font-bold'>Exclusive Products</p>
        <p className='text-xs'>Find your favorite exclusive product</p>
        <SearchProducts />
        
        {path === '/clothes' && <SearchClothes />}
        {path === '/' && <Card />}
        
        {context.door && <ProductDetail/>}
      </Layout>
      
    </>
  )
}

export default Home
