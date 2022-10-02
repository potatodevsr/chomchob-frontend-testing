import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rating from "rc-rate";
import { fetchAPI } from "./api/fetchAPI";
import clsx from "clsx";
import Link from "next/link";

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
  const [layout, setLayout] = useState('list')

  useEffect(() => {
    fetchProducts({ setProducts })
  }, [])


  return (
    <>
      <section className="bg-gray-200">
        <section>
          <div className="w-full flex items-center justify-between mx-auto ">
            <div className="py-4 pl-8">
              Products ({products?.length})
            </div>

           
            <div className="">
              <button onClick={() => setLayout('grid')} className={clsx(layout === "grid" && "bg-white", "p-2 rounded-l-lg hover:bg-gray-200")}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.0206 0.900585C1.58777 0.396654 2.37645 0.25 3.23 0.25H7.27C8.12355 0.25 8.91223 0.396654 9.4794 0.900585C10.0692 1.42461 10.25 2.17847 10.25 2.98V7.52C10.25 8.32097 10.0694 9.07598 9.47831 9.59914C8.91006 10.102 8.12079 10.2451 7.26778 10.24H3.23C2.37912 10.24 1.58971 10.0968 1.02169 9.59414C0.430088 9.07055 0.25 8.31497 0.25 7.51V2.98C0.25 2.17847 0.430812 1.42461 1.0206 0.900585ZM2.0169 2.02191C1.88919 2.13539 1.75 2.37153 1.75 2.98V7.51C1.75 8.12503 1.88991 8.35945 2.01581 8.47087C2.16529 8.60316 2.49088 8.74 3.23 8.74H7.27472C8.01075 8.74463 8.3355 8.60746 8.48419 8.47586C8.61057 8.36402 8.75 8.12903 8.75 7.52V2.98C8.75 2.37153 8.61081 2.13539 8.4831 2.02191C8.33277 1.88835 8.00645 1.75 7.27 1.75H3.23C2.49355 1.75 2.16723 1.88835 2.0169 2.02191ZM14.73 0.25C13.8765 0.25 13.0878 0.396654 12.5206 0.900585C11.9308 1.42461 11.75 2.17847 11.75 2.98V7.51C11.75 8.31497 11.9301 9.07055 12.5217 9.59414C13.0897 10.0968 13.8791 10.24 14.73 10.24H18.7678C19.6208 10.2451 20.4101 10.102 20.9783 9.59914C21.5694 9.07598 21.75 8.32097 21.75 7.52V2.98C21.75 2.17847 21.5692 1.42461 20.9794 0.900585C20.4122 0.396654 19.6236 0.25 18.77 0.25H14.73ZM13.25 2.98C13.25 2.37153 13.3892 2.13539 13.5169 2.02191C13.6672 1.88835 13.9935 1.75 14.73 1.75H18.77C19.5065 1.75 19.8328 1.88835 19.9831 2.02191C20.1108 2.13539 20.25 2.37153 20.25 2.98V7.52C20.25 8.12903 20.1106 8.36402 19.9842 8.47586C19.8355 8.60746 19.5108 8.74463 18.7747 8.74H14.73C13.9909 8.74 13.6653 8.60316 13.5158 8.47087C13.3899 8.35945 13.25 8.12503 13.25 7.51V2.98ZM14.73 11.75C13.8599 11.75 13.0562 11.9207 12.4884 12.4884C11.9207 13.0562 11.75 13.8599 11.75 14.73V18.77C11.75 19.6401 11.9207 20.4438 12.4884 21.0116C13.0562 21.5793 13.8599 21.75 14.73 21.75H18.77C19.6401 21.75 20.4438 21.5793 21.0116 21.0116C21.5793 20.4438 21.75 19.6401 21.75 18.77V14.73C21.75 13.8599 21.5793 13.0562 21.0116 12.4884C20.4438 11.9207 19.6401 11.75 18.77 11.75H14.73ZM13.25 14.73C13.25 14.0101 13.3993 13.6988 13.5491 13.5491C13.6988 13.3993 14.0101 13.25 14.73 13.25H18.77C19.4899 13.25 19.8012 13.3993 19.9509 13.5491C20.1007 13.6988 20.25 14.0101 20.25 14.73V18.77C20.25 19.4899 20.1007 19.8012 19.9509 19.9509C19.8012 20.1007 19.4899 20.25 18.77 20.25H14.73C14.0101 20.25 13.6988 20.1007 13.5491 19.9509C13.3993 19.8012 13.25 19.4899 13.25 18.77V14.73ZM3.23 11.75C2.35988 11.75 1.55615 11.9207 0.98842 12.4884C0.420689 13.0562 0.25 13.8599 0.25 14.73V18.77C0.25 19.6401 0.420689 20.4438 0.98842 21.0116C1.55615 21.5793 2.35988 21.75 3.23 21.75H7.27C8.14012 21.75 8.94385 21.5793 9.51158 21.0116C10.0793 20.4438 10.25 19.6401 10.25 18.77V14.73C10.25 13.8599 10.0793 13.0562 9.51158 12.4884C8.94385 11.9207 8.14012 11.75 7.27 11.75H3.23ZM1.75 14.73C1.75 14.0101 1.89931 13.6988 2.04908 13.5491C2.19885 13.3993 2.51012 13.25 3.23 13.25H7.27C7.98988 13.25 8.30115 13.3993 8.45092 13.5491C8.60069 13.6988 8.75 14.0101 8.75 14.73V18.77C8.75 19.4899 8.60069 19.8012 8.45092 19.9509C8.30115 20.1007 7.98988 20.25 7.27 20.25H3.23C2.51012 20.25 2.19885 20.1007 2.04908 19.9509C1.89931 19.8012 1.75 19.4899 1.75 18.77V14.73Z" fill="#292D32" />
                </svg>
              </button>
             
              <button onClick={() => setLayout('list')} className={clsx(layout === "list" && "bg-white", "p-2 rounded-r-lg  border-white hover:bg-white",)}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.1 0.25C2.26514 0.25 1.48664 0.425099 0.941238 1.00485C0.406656 1.57309 0.25 2.36968 0.25 3.23V7.27C0.25 8.13032 0.406656 8.92691 0.941238 9.49516C1.48664 10.0749 2.26514 10.25 3.1 10.25H18.9C19.7349 10.25 20.5134 10.0749 21.0588 9.49516C21.5933 8.92691 21.75 8.13032 21.75 7.27V3.23C21.75 2.36968 21.5933 1.57309 21.0588 1.00485C20.5134 0.425099 19.7349 0.25 18.9 0.25H3.1ZM1.75 3.23C1.75 2.50032 1.89334 2.18191 2.03376 2.03265C2.16336 1.8949 2.43486 1.75 3.1 1.75H18.9C19.5651 1.75 19.8366 1.8949 19.9662 2.03265C20.1067 2.18191 20.25 2.50032 20.25 3.23V7.27C20.25 7.99969 20.1067 8.31809 19.9662 8.46735C19.8366 8.6051 19.5651 8.75 18.9 8.75H3.1C2.43486 8.75 2.16336 8.6051 2.03376 8.46735C1.89334 8.31809 1.75 7.99969 1.75 7.27V3.23ZM3.1 11.75C2.26514 11.75 1.48664 11.9251 0.941238 12.5048C0.406656 13.0731 0.25 13.8697 0.25 14.73V18.77C0.25 19.6303 0.406656 20.4269 0.941238 20.9952C1.48664 21.5749 2.26514 21.75 3.1 21.75H18.9C19.7349 21.75 20.5134 21.5749 21.0588 20.9952C21.5933 20.4269 21.75 19.6303 21.75 18.77V14.73C21.75 13.8697 21.5933 13.0731 21.0588 12.5048C20.5134 11.9251 19.7349 11.75 18.9 11.75H3.1ZM1.75 14.73C1.75 14.0003 1.89334 13.6819 2.03376 13.5327C2.16336 13.3949 2.43486 13.25 3.1 13.25H18.9C19.5651 13.25 19.8366 13.3949 19.9662 13.5327C20.1067 13.6819 20.25 14.0003 20.25 14.73V18.77C20.25 19.4997 20.1067 19.8181 19.9662 19.9673C19.8366 20.1051 19.5651 20.25 18.9 20.25H3.1C2.43486 20.25 2.16336 20.1051 2.03376 19.9673C1.89334 19.8181 1.75 19.4997 1.75 18.77V14.73Z" fill="#292D32" />
              </svg>
              </button>
            </div>

          </div>
        </section>

  
        <section className="m-0 bg-gray-200">
          <div className={clsx(
            layout === "grid" ? "grid-cols-4" : "grid-cols-1",
            "grid gap-6 container my-5 pt-5 w-full mx-auto "
          )}>
            {products?.map((product, index) => {
              return <div key={product.id} className={clsx(layout === "grid" && "flex-col", "flex p-2 bg-white rounded-md w-68 h-68")}>

                <div className="">
    
                  <img
                    className={clsx("rounded-lg overflow-auto object-cover ",
                      layout === "list" ? 'h-[60px] w-[60px] min-w-[60px]' : 'h-[250px] w-[250px]')}
                    src={product.attributes.image_url}
                  />
                </div>

                <div className="flex">
         
                  {layout === "grid" &&
                    <img
                      className="rounded-md h-10 w-10 "
                      src={product.attributes.brand.data.attributes.logo_url}

                    />
                  }
                  <div className="flex flex-col pl-2">

     
                    <Link href={`/${product.id}`} passHref>
                      <a className=" text-sm font-normal flex">
                        {product.attributes.name}
                      </a>
                    </Link>


 
                    {layout === "list" &&
                      <p className="text-neutral-400 text-xs">
                        {product.attributes.description}
                      </p>}


                    <div className="text-neutral-400 flex justify-between items-baseline">

                      <h1 className="pt-4 text-sm pr-6">Price</h1>


                      {+product.attributes.review.number > 0 &&
                        <div className="text-sm">
                          Reviews ({product.attributes.review.number}  reviews)
                        </div>}

                    </div>

                    <div className="flex pr-2 justify-between items-baseline">
                      {product.attributes.price.toLocaleString('th', {
                        minimumFractionDigits: 2
                      })}

                      {+product.attributes.review.number > 0 &&
                        <>
                          <div>
                            <Rating disabled={true} value={product.attributes.review.rating} />
                          </div>
                        </>}
                    </div>

                  </div>

                </div>
              </div>
            })}

          </div>
        </section>
        <section>
        </section>
      </section>
    </>
  );
}
