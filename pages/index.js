import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "rc-rate";
import "rc-rate/assets/index.css";
const data = [
  {
    // PRODUCTS1
    image: '/products/Preview_2.jpg',
    name: 'Garmin vívosport',
    description: 'Garmin vívosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี เติมเต็มสไตล์ให้กับคุณ vivosportจุดเด่นที่การออกแบบทันสมัย หน้าจอสี ติดตามกิจกรรม,รวมถึงจำนวนก้าวเดิน,การนอนหลับ มีคุณสมบัติ Move IQ ตรวจจับเมื่อคุณเริ่มกิจกรรมหนึ่งๆได้โดยอัตโนมัติ การแจ้งเตือน Smart notifications',
    seller: {
      'name': 'Garmin',
      logo: '/public/garmin-logo.jpeg'
    },
    price: '7,191.00',
    review_count: 10,
    star: 5
  },
  // PRODUCTS2
  {
    image: '/products/Preview_1.jpg',
    name: 'Garmin vivoactive 3 (Stainless) สีขาว',
    description: 'Garmin vivomove HR สายรัดข้อมือเพื่อสุขภาพ (สีขาว) • เติมเต็มสไตล์ให้กับคุณ vivomove HR ที่ยังคงไว้ด้วยความคลาสิคแบบนาฬิกาเข็ม แต่มาพร้อมฟังก์ชั่นสุดล้ำ ติดตามกิจกรรม,รวมถึงจำนวนก้าวเดิน,การนอนหลับ และการวัดอัตราการเต้นของหัวใจที่ข้อมือตลอด 24ชม. โดยแสดงผลผ่านจอดิจิทัล • มีคุณสมบัติ Move IQ...',
    seller: {
      'name': 'Garmin',
      logo: '/public/garmin-logo.jpeg'
    },
    price: '4,979.00',
    review_count: 15,
    star: 3
  },
  // PRODUCTS3
  {
    image: '/products/Preview.jpg',
    name: 'DKNY MINUTE WOODHAVEN HYBRID SMARTWATCH SET',
    description: 'Garmin vivomove HR สายรัดข้อมือเพื่อสุขภาพ (สีขาว) • เติมเต็มสไตล์ให้กับคุณ vivomove HR ที่ยังคงไว้ด้วยความคลาสิคแบบนาฬิกาเข็ม แต่มาพร้อมฟังก์ชั่นสุดล้ำ ติดตามกิจกรรม,รวมถึงจำนวนก้าวเดิน,การนอนหลับ และการวัดอัตราการเต้นของหัวใจที่ข้อมือตลอด 24ชม. โดยแสดงผลผ่านจอดิจิทัล • มีคุณสมบัติ Move IQ...',
    seller: {
      'name': 'DKNY',
      logo: '/public/dkny-logo.jpeg'
    },
    price: '7,191.00',
    review_count: 1,
    star: 4
  },
   //PRODUCTS4
  {
    image: '/products/Preview_3.jpg',
    name: 'MINETTA GREY LEATHER ROSE GOLD-TONE WATCH',
    description: 'The Minetta features a silver-tone satin-finish dial with a modern, minimalist display which is complemented by a classic leather strap with tang buckle fastening.',
    seller: {
      'name': 'DKNY',
      logo: '/public/dkny-logo.jpeg'
    },
    price: '4,465.00',
    review_count: 2,
    star: 3
  },
     //PRODUCTS5
  {
    image: '/products/Preview_9.jpg',
    name: 'THE MODERNIST 34MM GOLD-TONE STAINLESS...',
    description: 'Let the Modernist keep you in check on your own time. This sleek style keeps it minimal to ensure it\'s as versatile as you are, with a streamlined gold-tone stainless-steel case, white satin sunray dial and smooth matte leather strap.',
    seller: {
      'name': 'DKNY',
      logo: '/public/dkny-logo.jpeg'
    },
    price: '4,465.00',
    review_count: 6,
    star: 3
  },
  //PRODUCTS6
  {
    image: '/products/Preview_6.jpg',
    name: 'Casio GPW-2000-1A2JF G-Shock Gravitymaster',
    description: 'รุ่น GRAVITYMASTER ใหม่นี้นำนาฬิกา GPS Hybrid ที่ใช้พลังงานแสงอาทิตย์และควบคุมด้วยคลื่นวิทยุมาใส่ในตัวเรือน TRIPLE G RESIST อันแข็งแกร่ง นาฬิกาจึงให้ความแม่นยำ ความทนทาน และความสามารถในการใช้งานจริงอันเหนือชั้นซึ่งเป็นที่ต้องการของนักบินในปัจจุบัน นักบินสามารถรับการเข้าถึงที่ไม่จำกัดของ...',
    seller: {
      'name': 'Casio',
      logo: '/public/casio-logo.jpeg'
    },
    price: '22,660.00',
    review_count: 0,
    star: 0
  },
  //PRODUCTS7
  {
    image: '/products/Preview_8.jpg',
    name: 'Casio GA-1000-4B',
    description: 'Garmin vívosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี เติมเต็มสไตล์ให้กับคุณ vivosportจุดเด่นที่การออกแบบทันสมัย หน้าจอสี ติดตามกิจกรรม,รวมถึงจำนวนก้าวเดิน,การนอนหลับ มีคุณสมบัติ Move IQ ตรวจจับเมื่อคุณเริ่มกิจกรรมหนึ่งๆได้โดยอัตโนมัติ การแจ้งเตือน Smart notifications',
    seller: {
      'name': 'Casio',
      logo: '/public/casio-logo.jpeg'
    },
    price: '7,191.00',
    review_count: 15,
    star: 4
  },
    //PRODUCTS8
    {
    image: '/products/Preview_4.jpg',
    name: 'Garmin vivomove HR สีขาว',
    description: 'Garmin vivomove HR สายรัดข้อมือเพื่อสุขภาพ (สีขาว) • เติมเต็มสไตล์ให้กับคุณ vivomove HR ที่ยังคงไว้ด้วยความคลาสิคแบบนาฬิกาเข็ม แต่มาพร้อมฟังก์ชั่นสุดล้ำ ติดตามกิจกรรม,รวมถึงจำนวนก้าวเดิน,การนอนหลับ และการวัดอัตราการเต้นของหัวใจที่ข้อมือตลอด 24ชม. โดยแสดงผลผ่านจอดิจิทัล • มีคุณสมบัติ Move IQ...',
    seller: {
      'name': 'Garmin',
      logo: '/public/garmin-logo.jpeg'
    },
    price: '7,011.00',
    review_count: 5,
    star: 3
  },
      //PRODUCTS9
      {
    image: '/products/Preview_5.jpg',
    name: 'Garmin vivomove HR สีดำ',
    description: 'Garmin vivomove HR สายรัดข้อมือเพื่อสุขภาพ (สีขาว) • เติมเต็มสไตล์ให้กับคุณ vivomove HR ที่ยังคงไว้ด้วยความคลาสิคแบบนาฬิกาเข็ม แต่มาพร้อมฟังก์ชั่นสุดล้ำ ติดตามกิจกรรม,รวมถึงจำนวนก้าวเดิน,การนอนหลับ และการวัดอัตราการเต้นของหัวใจที่ข้อมือตลอด 24ชม. โดยแสดงผลผ่านจอดิจิทัล • มีคุณสมบัติ Move IQ...',
    seller: {
      'name': 'Garmin',
      logo: '/public/garmin-logo.jpeg'
    },
    price: '7,011.00',
    review_count: 5,
    star: 3
  },
      //PRODUCTS10
      {
    image: '/products/Preview_7.jpg',
    name: 'Garmin vivoactive 3 (Stainless) สีดำ',
    description: '• GPS Smartwatch ที่วัดอัตราการเต้นหัวใจที่ข้อมือ • ปรับแต่งนาฬิกาของคุณให้มีความเฉพาะตัวด้วยหน้าปัด, แอปและวิดเจ็ตนับพันรายการจากร้านค้า Connect IQ™ ของเรา • ตรวจสอบระดับการออกกำลังกายของคุณด้วยค่าประมาณการ VO2 max และ fitness age รวมทั้งการติดตามความเครียดด้วย1 • GPS และแอปเกมกีฬาในร่มที่โหลดไว้...',
    seller: {
      'name': 'Garmin',
      logo: '/public/garmin-logo.jpeg'
    },
    price: '9,450.00',
    review_count: 1,
    star: 4
  },

]
export default function Home() {
  const [rating, setRating] = useState(5);
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

      <section className="">
        <div className="">
          <h1>Products (10)</h1>
        </div>
        <div className="">
          <img src="product_1.jpg" width={300} height={300} />
          <div className="">
            <div className="flex space-x-2 pt-6">
              <img src="casio.logo.png" alt="" srcSet="" />
              <span className="">Garmin vívosport</span>
            </div>

            <div className="grid-cols-2 grid ">
              <div className="flex">Price</div>
              <div>Reviews (10 reviews)</div>
              <div className="flex" >7,191.00</div>
              <div><Rating onChange={handleRating} value={rating} /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
