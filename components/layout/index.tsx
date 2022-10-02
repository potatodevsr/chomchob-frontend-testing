import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export function Layout({ children }) {
    const [count, setCount] = useState()
    useEffect(() => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        const countReduced = cart.reduce((a, c) => {
            return a + c.quantity
        }, 0)
        setCount(countReduced)
    }, [])

    return (
        <>
            <header className="bg-red-500">
                <nav className="w-full flex items-center justify-between mx-auto">
                    <Link href='/' passHref>
                        <a className="logo py-4 pl-8">
                            <img src="cob-logo.webp" />
                        </a>
                    </Link>
                    <ul className="navbar md:flex ma:items-center ">
                        <li className="text-white py-4 px-6">
                            <a href="#" className="">Home</a>
                        </li>
                        <li className="text-white py-4 px-6">
                            <a href="#">New Products</a>
                        </li>
                        <li className="text-white py-4 px-6">
                            <a href="#">Women</a>
                        </li>
                        <li className="text-white py-4 px-6">
                            <a href="#">Men</a>
                        </li>
                        <li className="text-white py-4 px-6">
                            <a href="#">Kid</a>
                        </li>
                        <li className="text-white py-4 px-6">
                            <a href="#">Accessories</a>
                        </li>
                        <li className="py-4 px-6">
                            <Link href='/cart' passHref>
                                <a className='relative'>
                                    <img src="baghappy.svg" alt="" width={24} height={24} />
                                    <span className="text-xs p-1 bg-gray-800 text-white absolute rounded-full -top-3 -right-3 w-[24px] h-[24px] flex items-center justify-center">
                                        {count}
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='w-full'>{children}</main>
            <footer className='bg-cyan-900 #1A586A p-4'>
                <span className='block text-xs sm:text-center font-normal text-white'>Copyright © 2022 ChomCHOB. All Rights Reserved.</span>
            </footer>
        </>
    )
}
