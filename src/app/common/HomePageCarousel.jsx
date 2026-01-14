import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { autoSlide, nextSlider, prevSlider, slideWithClick } from "../../redux/slice";
function HomePageCarousel() {
  const homePageCarouImg = [
    "http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/slidershow/home-5/item-1.jpg",
    "http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/slidershow/home-5/item-3.jpg",
    "http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/banner/item-31.jpg",
    "http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/banner/item-32.jpg",
    "http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/slidershow/home-5/item-1.jpg",
  ];

  const dispatch = useDispatch();

  const nextSlide = () => {
    dispatch(nextSlider());
  };
  const prevSlide = () => {
    dispatch(prevSlider());
  };

  const slide = useSelector((state) => state.slider);

  // const interval = setInterval(() => {
  //   dispatch(autoSlide())
  //   console.log("hello")
  // }, 1000);

  console.log(slide.sliderNum)

  //   useEffect(() => {
  //     const countDot = document.querySelector(`#${"slide"+slideCount}`);
  //     countDot.style.backgroundColor = "#FF6C00"
  //   }, [slideCount]);

  return (
    <div
      id="arrowParent"
      className="w-full md:w-full lg:w-[75%] relative flex items-center rounded-xl overflow-hidden"
    >
      {homePageCarouImg.map((img, idx) => {
        return (
          <Link
            to={"/deals"}
            key={idx}
            className={`shrink-0 w-full transition duration-700 transform ease-in-out`}
            style={{ transform: `translateX(-${slide.sliderTranslate}%)` }}
          >
            <div className="w-full">
              <img className="w-full" src={img} alt="" />
            </div>
          </Link>
        );
      })}

      <div
        id=""
        className="absolute arrowChild w-full flex justify-between items-center top-[50%] transform -translate-y-[50%]"
      >
        <div
          onClick={prevSlide}
          className="px-3 py-2 cursor-pointer bg-[#FF6C00] rounded-r-full text-2xl text-white"
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div
          onClick={nextSlide}
          className="px-3 py-2 cursor-pointer bg-[#FF6C00] rounded-l-full text-2xl text-white"
        >
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div className="flex  items-center gap-2 absolute left-[50%] transform -translate-x-[50%] bottom-6">
        {homePageCarouImg.map((_, idx) => {
          return (
            <div
              onClick={() => {
                dispatch(slideWithClick(idx));
              }}
              key={idx}
              className={`transform ${
                idx === slide.sliderNum
                  ? "bg-[#FF6C00]  px-[8px] py-[2px]"
                  : "bg-gray-700 px-1.5 py-[1.5px]"
              }   rounded-full hover:bg-[#FF6C00] hover:px-[8px] hover:py-[2px] cursor-pointer`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePageCarousel;
