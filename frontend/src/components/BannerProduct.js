import React, { useEffect, useState } from "react";
import image1 from "../assest/assest/banner/img1.webp";
import image2 from "../assest/assest/banner/img2.webp";
import image3 from "../assest/assest/banner/img3.jpg";
import image4 from "../assest/assest/banner/img4.jpg";
import image5 from "../assest/assest/banner/img5.webp";

import image1Mobile from "../assest/assest/banner/img1_mobile.jpg";
import image2Mobile from "../assest/assest/banner/img2_mobile.webp";
import image3Mobile from "../assest/assest/banner/img3_mobile.jpg";
import image4Mobile from "../assest/assest/banner/img4_mobile.jpg";
import image5Mobile from "../assest/assest/banner/img5_mobile.png";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5];

  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const preveImage = () => {
    if (desktopImages != 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(desktopImages.length - 1 > currentImage){
        nextImage()

      }else{
        setCurrentImage(0)

      }
    },5000)

    return ()=>clearInterval(interval)
  }, [currentImage])

  return (
    <div className="container mx-auto px-4 rounded">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden">
          <div className="flex justify-between w-full text-2xl">
            <button
              className="bg-white shadow-md rounded-full p-1"
              onClick={preveImage}
            >
              <FaAngleLeft />
            </button>
            <button
              className="bg-white shadow-md rounded-full p-1"
              onClick={nextImage}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>


        {/**Desktop and tablet version */}
        <div className="hidden md:flex w-full h-full overflow-hidden ">
          {desktopImages.map((imageUrl, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all"
                key={imageUrl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageUrl} className="w-full h-full" />
              </div>
            );
          })}
        </div>


            {/**Mobile version */}
        <div className="flex w-full h-full overflow-hidden md:hidden">
          {mobileImages.map((imageUrl, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all"
                key={imageUrl}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageUrl} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default BannerProduct;
