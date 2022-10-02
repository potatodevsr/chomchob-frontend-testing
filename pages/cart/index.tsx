import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../api/fetchAPI';

async function fetchCart({ setProducts, cart }) {
    const filters = cart.reduce((a, { id }, index) => ({ ...a, [`filters[id][$in][${index}]`]: id }), {})

    const product = await fetchAPI({
        params: {
            populate: "brand",
            ...filters
        },
    });

    if (typeof setProducts === "function")
        setProducts(product.data);
    return product;
}

function calculateTotal({ products, cart }) {
    return cart.reduce((a, c) => {
        const product = products.find(({ id }) => id === c.id)
        return a + c.quantity * product.attributes.price
    }, 0)
}
const Cart = () => {
    const [products, setProducts] = useState()
    const [cart, setCart] = useState()
    const [total, setTotal] = useState()
    useEffect(() => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        setCart(cart)
        fetchCart({ setProducts, cart })
    }, [])

    useEffect(() => {
        if (products && cart)
            setTotal(calculateTotal({ products, cart }))
    }, [products, cart])

    return (
        <div className=" bg-gray-200 flex justify-center  p-12">
            <div className="bg-white  container p-12 rounded-lg ">
                <h1 className='font-bold text-2xl'>Cart</h1>

                <table className='w-full'>
                    <tr>
                        <th className='py-4 border-b border-gray-200 text-left'>PRODUCT NAME</th>
                        <th className='py-4 border-b border-gray-200 text-center'>PRICE</th>
                        <th className='py-4 border-b border-gray-200 text-center'>QUANTITY</th>
                        <th className='py-4 border-b border-gray-200 text-right'>TOTAL</th>
                    </tr>
                    {products?.map(product => {
                        const parameters = cart.find(({ id }) => id === product.id)
                        return <tr key={product.id}>
                            <td className='py-4 border-b border-gray-200 flex items-center'>
                                <img
                                    className="rounded-lg mr-2 overflow-auto object-cover h-[40px] w-[40px] min-w-[40px]"
                                    src={product.attributes.image_url}
                                />
                                <span>
                                    {product.attributes.name}
                                </span>
                            </td>
                            <td className='py-4 border-b border-gray-200 text-center'>฿{product.attributes.price.toLocaleString('th', {
                                minimumFractionDigits: 2
                            })}</td>
                            <td className='py-4 border-b border-gray-200 text-center'>{parameters.quantity}</td>
                            <td className='py-4 border-b border-gray-200 text-right'>{
                                (parameters.quantity * product.attributes.price).toLocaleString('th', {
                                    minimumFractionDigits: 2
                                })
                            }</td>
                        </tr>
                    })}


                </table>
                <div className="flex justify-end items-baseline mt-4">
                    <div className='mr-2'>
                        Subtotal ({products?.length} Product):
                    </div>
                    <div className='font-bold text-lg text-red-400'>
                        ฿{total?.toLocaleString('th', {
                            minimumFractionDigits: 2
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Cart 