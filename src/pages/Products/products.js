import React, { useEffect } from "react";
import { Header, Footer } from "../../components";
import FetchProducts from "../../components/Products/FetchProducts";
import "../../Assets/css/_products.scss";
import { useTranslation } from "react-i18next";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTranslation([]);
  return (
    <div>
      <Header />
      <FetchProducts />
      <Footer />
    </div>
  );
};

export default Products;
