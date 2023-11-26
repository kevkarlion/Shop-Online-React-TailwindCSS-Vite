import Layout from '../../Components/Layout';
import Card from "../../Components/Card";
import { ProductDetail } from '../../Components/ProductDetail';
import { MiContext } from '../../Components/Context';
import { SearchProducts } from '../../Components/SearchProducts';
import { useContext } from 'react';

function Home() {

  const context = useContext(MiContext);
  
  return (


    <>
      <Layout>
        <p className=' text-lg font-bold'>Exclusive Products</p>
        <p className='text-xs'>Find your favorite exclusive product</p>
        <SearchProducts />
        <Card />
        {context.door && <ProductDetail/>}
      </Layout>
      
    </>
  )
}

export default Home
