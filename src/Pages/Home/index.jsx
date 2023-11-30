import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { MiContext } from "../../Components/Context";
import { SearchProducts } from "../../Components/SearchProducts";

import { useContext } from "react";

import { SearchFiltered } from "../../Components/SearchFiltered";

function Home() {
  const context = useContext(MiContext);

  const path = window.location.pathname;

  console.log(path);

  return (
    <>
      <Layout>
        <p className=" text-lg font-bold">Exclusive Products</p>
        <p className="text-xs">Find your favorite exclusive product</p>
        <SearchProducts />

        {path === "/" && <Card />}
        {(path === "/clothes" ||
          path === "/jewelery" ||
          path === "/electronics" ) && <SearchFiltered />}
        {context.door && <ProductDetail />}
      </Layout>
    </>
  );
}

export default Home;
