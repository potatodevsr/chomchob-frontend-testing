import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";
import { fetchAPI } from "../api/fetchAPI";
import Rating from "rc-rate";

async function fetchProduct({ setProduct, product_id }) {
    console.log('product_id', product_id)
    const product = await fetchAPI({
        url: `/${product_id}`,
        params: {
            populate: "brand",
        },
    });
    console.log('product', product)
    if (typeof setProduct === "function")
        setProduct(product.data);
    return product;
}

function ProductDetails() {
    const router = useRouter()
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (router.query.product_id)
            fetchProduct({ setProduct, product_id: router.query.product_id })
    }, [router.query.product_id])

  
    function addToCart() {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        const alreadyAddedIndex = cart.findIndex(({ id }) => id === product.id)

        if (alreadyAddedIndex !== -1) {
            cart[alreadyAddedIndex].quantity += quantity
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            const newItem = {
                id: product.id,
                quantity
            }
            const itemToCart = [...cart, newItem]
            localStorage.setItem('cart', JSON.stringify(itemToCart))
        }
    }


    if (!product) return <div>Loading</div>
    return <div className="">
        <div className="flex bg-gray-200 justify-center p-12">

            <div className="bg-white w-auto h-auto flex container py-6 rounded-lg ">
                <div className="pt-10 pl-9">
                    <img
                        className=""
                        src={product?.attributes.image_url || 'https://via.placeholder.com/300'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="pl-6">
             
                    <a className="text-xl">
                        {product?.attributes.name}
                    </a>
                
                    <div className="pt-4">
                        <Rating disabled={true} value={product?.attributes?.review.rating} />
                        ({product?.attributes.review.number}  reviews)
                    </div>
              
                    <p className="pt-4 text-neutral-400 text-xs">
                        {product?.attributes?.description}
                    </p>
           
                    <h1 className="text-neutral-400 pt-4 text-sm">Price</h1>
             
                    <div className="flex  items-baseline">
                        <div className="text-red-500 pr-3.5 flex ">
                            {product?.attributes.price.toLocaleString('th', {
                                minimumFractionDigits: 2
                            })}
                        </div>
                        <p className="line-through text-gray-200 text-xs ">
                            {(1.2 * product?.attributes.price).toLocaleString('th', {
                                minimumFractionDigits: 2
                            })}
                        </p>
                    </div>
                    <div className="flex items-baseline pt-6">
                        <p className="text-xs pr-14">Quantitiy:</p>
                        <div className="flex items-center w-[128px] rounded-md border border-gray-400">
                            <button onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)} type="button" className="min-w-[38px] h-[38px]">-</button>
                            <input min={0} max={99} value={quantity} onChange={(e) => {
                                const value = Number(e.target.value)
                                if (value > 99 || value < 0) return
                                setQuantity(e.target.value)
                            }} className="bg-gray-100 h-[38px] w-full text-center" type="number" />
                            <button onClick={() => setQuantity(quantity + 1 > 99 ? 99 : quantity + 1)} type="button" className="min-w-[38px] h-[38px]">+</button>
                        </div>
                    </div>
             
                    <div className="pt-10">
                        <button onClick={addToCart} className="bg-red-500 hover:bg-red-600 h-[50px] text-white items-center font-semibold text-sm flex justify-center py-2 px-4 w-[242px] rounded-md  ">
                            <svg className="min-w-[18px] min-h-[18px] mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.13707 0.96897C7.43036 1.26146 7.43102 1.73633 7.13853 2.02963L5.53506 3.63753H12.4649L10.8614 2.02963C10.5689 1.73633 10.5696 1.26146 10.8629 0.96897C11.1562 0.676481 11.631 0.677136 11.9235 0.970433L14.5833 3.63753H14.835C15.2732 3.63753 15.9156 3.649 16.4308 3.99408C17.0267 4.39319 17.25 5.07067 17.25 5.88753C17.25 6.76209 17.0537 7.50832 16.3879 7.89202C16.2712 7.9593 16.1517 8.00756 16.0346 8.04241L14.8516 14.2111C14.7197 14.8997 14.5398 15.7211 13.9572 16.3316C13.3425 16.9758 12.4278 17.25 11.1675 17.25H6.64497C5.45064 17.25 4.54616 16.9511 3.91568 16.3126C3.30634 15.6955 3.06979 14.874 2.94247 14.1021L1.95295 8.03869C1.83985 8.00414 1.72467 7.95694 1.61203 7.89202C0.946248 7.50832 0.749969 6.76209 0.749969 5.88753C0.749969 5.07067 0.97327 4.39319 1.56916 3.99407C2.08437 3.649 2.72675 3.63753 3.16497 3.63753H3.41666L6.07641 0.970433C6.3689 0.677136 6.84377 0.676481 7.13707 0.96897ZM3.48893 8.13753L4.42247 13.858C4.53515 14.5407 4.70744 14.9796 4.98301 15.2587C5.23753 15.5164 5.6943 15.75 6.64497 15.75H11.1675C12.2397 15.75 12.6637 15.5143 12.8721 15.296C13.1125 15.044 13.2402 14.6503 13.3784 13.929L14.489 8.13753H3.48893ZM11.3286 10.3663C11.6095 10.6707 11.5905 11.1452 11.2862 11.4261L8.84868 13.6761C8.55288 13.9492 8.09429 13.94 7.80964 13.6554L6.68464 12.5304C6.39175 12.2375 6.39175 11.7626 6.68464 11.4697C6.97753 11.1768 7.45241 11.1768 7.7453 11.4697L8.36076 12.0852L10.2688 10.3239C10.5731 10.043 11.0476 10.062 11.3286 10.3663ZM2.40311 5.24084C2.39006 5.24863 2.24997 5.33224 2.24997 5.88753C2.24997 6.243 2.29233 6.43494 2.32947 6.53051C2.34639 6.57405 2.35944 6.59028 2.36128 6.5925C2.36214 6.59354 2.36063 6.59218 2.36103 6.59241C2.36928 6.59716 2.41799 6.62071 2.5706 6.63193C2.6878 6.64054 2.80651 6.63965 2.96312 6.63848C3.02397 6.63803 3.09054 6.63753 3.16497 6.63753H14.835C14.9094 6.63753 14.976 6.63803 15.0368 6.63848C15.1934 6.63965 15.3121 6.64054 15.4293 6.63193C15.5801 6.62085 15.6295 6.59773 15.6386 6.59259C15.6381 6.59321 15.6387 6.59274 15.6389 6.5925C15.639 6.5924 15.639 6.59234 15.6389 6.59241L15.6387 6.5925C15.6405 6.59028 15.6536 6.57405 15.6705 6.53051C15.7076 6.43494 15.75 6.243 15.75 5.88753C15.75 5.33224 15.6099 5.24863 15.5968 5.24084L15.596 5.24036C15.5652 5.21967 15.4999 5.18905 15.3646 5.16717C15.227 5.14493 15.057 5.13753 14.835 5.13753H3.16497C2.94292 5.13753 2.77291 5.14493 2.63533 5.16717C2.49999 5.18905 2.43478 5.21967 2.4039 5.24036L2.40311 5.24084Z" fill="white" />
                            </svg>
                            <span>
                                ADD TO CARD
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductDetails 