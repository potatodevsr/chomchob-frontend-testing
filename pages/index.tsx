import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rating from "rc-rate";
import "rc-rate/assets/index.css";
import { fetchAPI } from "./api/fetchAPI";




async function fetchProducts({ setProducts }) {
  const products = await fetchAPI({
    params: {
      populate: "brand",
    },
  });
  console.log('products', products)
  if (typeof setProducts === "function")
    setProducts(products.data);
  return products;
}

export default function Home() {
  const [products, setProducts] = useState()
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetchProducts({ setProducts })
  }, [])

  const handleRating = (rate) => {
    console.log("rate", rate);
    setRating(rate);
  };

  return (
    <>
      <section className="container bg-red-500">
        <a href="#" className="logo">
          <img src="cob-logo.webp" />
        </a>
        <div>
          <ul className="navbar">
            <li className="text-white">
              <a href="#">Home</a>
            </li>
            <li className="text-white">
              <a href="#">New Products</a>
            </li>
            <li className="text-white">
              <a href="#">Women</a>
            </li>
            <li className="text-white">
              <a href="#">Men</a>
            </li>
            <li className="text-white">
              <a href="#">Kid</a>
            </li>
            <li className="text-white">
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">
                <img src="baghappy.svg" alt="" width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Product lists */}
      <section className="">
        <div className="">
          <h1>Products (10)</h1>
        </div>
        <div className="">
          <img src="1.jpg" width={300} height={300} />
          <div className="">
            <div className="flex space-x-2 pt-6">
              <img src="casio.logo.png" alt="" srcSet="" />
              <span className="">Garmin vívosport</span>
            </div>

            <div className="grid-cols-2 grid ">
              <div className="flex">Price</div>
              <div>Reviews (10 reviews)</div>
              <div className="flex">7,191.00</div>
              <div>
                <Rating onChange={handleRating} value={rating} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product detail */}
      <section className="container my-5 pt-5 ">
        {products?.map((product, index) => {
          return <div className="mt-5 flex">

            <div className="">
              {/* Image  */}
              <img
                className=""
                src={product.attributes.image_url}
                width={300}
                height={300}
              />
            </div>

            <div className="">
              {/* Name Products */}
              <h1 className="text-xl">
                {product.attributes.name}
              </h1>

              {/* Description */}
              <p className="text-neutral-400 text-xs">
                {product.attributes.description}
              </p>

            </div>

            <div>
              {/* Price */}
              <div className="flex">
                {product.attributes.price.toLocaleString('th', {
                  minimumFractionDigits: 2
                })}
              </div>

              {/* Rating Star */}
              <div>
                <Rating disabled={true} onChange={handleRating} value={product.attributes.review.rating} />
              </div>

              {/* Reviews */}
              <div>
                Reviews ({product.attributes.review.number}  reviews)
              </div>

            </div>
          </div>
        })}

      </section>

      {/* Cart */}
      <section></section>
    </>
  );
}
