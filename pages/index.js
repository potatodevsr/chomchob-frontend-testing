import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='container bg-red-500'>
      <div className='navbar'>
      <svg></svg>
        <nav>
          <ul className='bg-red-400'>
            <li className="text-white">Home</li>
            <li className="text-white">New Products</li>
            <li className="text-white">Women</li>
            <li className="text-white">Men</li>
            <li className="text-white">Kid</li>
            <li className="text-white">Accessories</li>
          </ul>
        </nav>

      </div>
    </section>
  )
}
