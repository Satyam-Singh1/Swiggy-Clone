import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Category() {
  const [slide, setSlide] = useState(3);
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
      const response = await fetch("/category.json");   
      const data = await response.json();
      setCategories(data);
     
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (categories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto border items-center">
        <div className="flex items-center justify-between">
          <div className="text-[25px] font-semibold">What's on your mind</div>
          <div className="flex">
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <FaArrowCircleRight onClick={nextSlide} className="text-[20px]" />
            </div>
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
              <FaArrowCircleLeft onClick={prevSlide} className="text-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex border border-red-600 overflow-hidden">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="w-[150px] shrink-0 duration-900"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                <img
                  src={category.image} // Path for images in `public/images`
                  alt={category.path}
                  className="w-full h-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
