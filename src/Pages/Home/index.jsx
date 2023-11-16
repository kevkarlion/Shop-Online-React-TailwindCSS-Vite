import Layout from '../../Components/Layout';
import Card from "../../Components/Card";
import { ProductDetail } from '../../Components/ProductDetail';
import { MiContext } from '../../Components/Context';
import { useContext } from 'react';

function Home() {

  const context = useContext(MiContext);
  
  return (


    <>
      <Layout>
        Home!
        <Card />
        {context.door && <ProductDetail/>}
      </Layout>
      
    </>
  )
}

export default Home
