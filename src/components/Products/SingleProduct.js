import React, { useState, useEffect } from "react";
import data from "../../data/products.json";
import { useParams, Link } from "react-router-dom";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";
import Header from "../Layout/Header/header";
import { useTranslation } from "react-i18next";
export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const { name } = useParams();
  useTranslation([]);
  useEffect(() => {
    const findProduct = () => {
      const newProduct = data.products.find((product) => product.name === name);
      setSingleProduct(newProduct);
    };
    findProduct();
  }, [name]);
  return (
    <>
      <Header />
      <ScrollToTop />
      <section className="sectionsingle container">
        <h1 className="h1">{name}</h1>
        <h1 className="h11">{singleProduct.info}</h1>
        <p>{singleProduct.descSingle}</p>
        {singleProduct.process?.map((data) => {
          return (
            <div>
              <p className="process" key={singleProduct.id}>
                {data.name}
              </p>
              <p key={singleProduct.id}>{data.desc}</p>
            </div>
          );
        })}
        {/* <p className="process">{singleProduct.process}</p> */}
        <ul className="ulsingle">
          {/* <li>
          <button className="mr-5">Order Your Spim</button>
        </li> */}
          <li>
            <Link to="/products">
              <button>&larr; &nbsp; Back</button>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
