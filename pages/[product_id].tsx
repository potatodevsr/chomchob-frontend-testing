import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { fetchAPI } from "./api/fetchAPI";

async function fetchProduct({ setProduct, product_id }) {
    console.log('product_id', product_id)
    const product = await fetchAPI({
        url: product_id,
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

    useEffect(() => {
        fetchProduct({ setProduct, product_id: router.query.product_id })
    }, [])

    console.log('router', router.query.product_id)
    return <div>ProductDetails</div>
}

export default ProductDetails 