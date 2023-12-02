import Layout from "../../Components/Layout";

import { ProductDetail } from "../../Components/ProductDetail";
import { MiContext } from "../../Components/Context";
import { SearchProducts } from "../../Components/SearchProducts";

import { useContext } from "react";

import { SearchFiltered } from "../../Components/SearchFiltered";

function Home() {

  const context = useContext(MiContext);
  return (
    <>
      <Layout>
        <p className=" text-lg font-bold">Exclusive Products</p>
        <p className="text-xs">Find your favorite exclusive product</p>
        <SearchProducts />
        <SearchFiltered />
        {context.door && <ProductDetail />}
      </Layout>
    </>
  );
}

export default Home;
