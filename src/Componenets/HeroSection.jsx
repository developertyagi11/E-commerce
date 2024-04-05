import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const HeroSection = () => {

  const images=[
    "images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299835.jpg",
    "images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_8247813.jpg"
  ];

  const[slide,setslide]=useState(0);

  const nxtslide=()=>{
    return (
        setslide(slide===images.length-1?0:slide+1)
    )
  };

  const prevlide=()=>{
    return (
      setslide(slide===0?images.length-1:slide-1)
    )
  }

  

  return (
    
    <div className='flex overflow-hidden relative w-screen banner-slider'>
      <FaChevronLeft className=" z-[40] absolute inset-y-1/2 left-5 cursor-pointer" onClick={nxtslide} />
    {
      images.map((image,index)=>{
        return(
          <img key={index} src={image} className={`${slide===index?" block":"hidden"} z-[30] `} />
        )
      })
    }
    <FaChevronRight className=" z-[40] absolute inset-y-1/2 right-5 cursor-pointer" onClick={prevlide} />
    <span className="flex justify-center w-full absolute bottom-1">
      {
        images.map((_,index)=>{
          return(
            <button key={index} onClick={()=>(setslide(index))} className={`shadow-md border-none z-[40] bg-white w-[0.6rem] h-[0.6rem] rounded-full mx-[0.2rem]  inset-x-1/2 cursor-pointer ${slide===index ? "bg-black" :""} `}></button>
          )
        })
      }
    </span>
    </div>
     
  )
}

export default HeroSection;