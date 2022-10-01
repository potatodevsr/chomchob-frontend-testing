import React from 'react'

export function  Layout({children}) {
    return (
        <>
        <header className="bg-red-500">
            <nav className="w-full flex items-center justify-between mx-auto">
                <a href="#" className="logo py-4 pl-8">
                    <img src="cob-logo.webp" />
                </a>
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
                        <a href="#">
                            <img src="baghappy.svg" alt="" width={24} height={24} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main className='w-full'>{children}</main>
        
        </>
    )
}
