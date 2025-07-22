import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import ProductsCard from './ProductsCard';
interface Melumat{
    id:number;
    product_image:string;
    product_price: string;
    product_name : string;
  }

const Products:React.FC = () => {
    const [melumat,setMelumat] =useState <Melumat []>([])

    useEffect(()=>{
          axios.get("/assets/product.json").then(cavab => setMelumat(cavab.data))
    },[melumat])
  return (
    <>
      

         <section className="products py-3"data-aos="fade-up">
  
      
  <Swiper
   slidesPerView={4}
   spaceBetween={50}
   breakpoints={{
     320: {
       slidesPerView: 1,
       spaceBetween: 30,
     },
     768: {
       slidesPerView: 2,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 4,
       spaceBetween: 50,
     },
   }}
   modules={[Pagination]}
  className="mySwiper productKarusel"
>
{
   melumat && melumat.map(birMelumat =>(
      <SwiperSlide key={birMelumat.id}><ProductsCard shekilProps = {birMelumat.product_image} priceProps={birMelumat.product_price} nameProps={birMelumat.product_name}/></SwiperSlide>
    )
      
    )

}
</Swiper>


</section>
    </>
   

  )
}

export default Products