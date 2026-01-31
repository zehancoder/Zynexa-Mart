import React from "react";
import Container from "../common/Container";
import HomePageCarousel from "../common/HomePageCarousel";
import ExploringSection from "./ExploringSection";
import DealsSection from "./DealsSection";
import NewProducts from "./NewProducts";
import MostSeeling from "./MostSeeling";
import MostReview from "./MostReviews";
import Headings1 from "../common/Headings";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { switchToSellAndReviewHandle } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
function HomePage() {
  const trustBadges = [
    {
      id: 1,
      title: "Secure Payment",
      icon: "shield-check",
    },
    {
      id: 2,
      title: "Money Back Guarantee",
      icon: "badge-dollar",
    },
    {
      id: 3,
      title: "Fast Delivery",
      icon: "truck-fast",
    },
    {
      id: 4,
      title: "100% Authentic Products",
      icon: "verified",
    },
    {
      id: 5,
      title: "24/7 Customer Support",
      icon: "headset",
    },
    {
      id: 6,
      title: "Easy Returns",
      icon: "rotate-ccw",
    },
    {
      id: 7,
      title: "Secure Checkout SSL",
      icon: "lock",
    },
    {
      id: 8,
      title: "Cash on Delivery Available",
      icon: "wallet",
    },
    {
      id: 9,
      title: "Trusted by Thousands",
      icon: "thumbs-up",
    },
    {
      id: 10,
      title: "Best Price Guarantee",
      icon: "tag",
    },
    {
      id: 11,
      title: "Quality Assured",
      icon: "award",
    },
  ];

  const dispatch = useDispatch();

  const switchData = useSelector((state) => state.switchToSellAndReview);
  console.log(switchData);

  const menFassionData = useSelector(
    (state) => state.fassion.menFassion.allFassion,
  );
  const womenFassionData = useSelector(
    (state) => state.fassion.womenFassion.allFassion,
  );
  console.log(menFassionData, womenFassionData);

  return (
    <>
      <div className="">
        <div>
          <Container>
            <div className="flex 2xl:flex-row flex-col md:pb-8 pb-5 lg:pb-5  gap-3">
              <div className="flex lg:flex-row flex-col  gap-3 w-full 2xl:w-[87%]">
                <HomePageCarousel />
                <div className="w-full  lg:w-[24%] gap-2 flex flex-row lg:flex-col">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/banner/item-30.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/banner/item-31.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="http://magento2.magentech.com/themes/sm_magethemepro/pub/media/wysiwyg/banner/item-32.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="border  w-full 2xl:w-[16%] border-gray-400 px-2 md:px-3 py-2 md:py-3 rounded-md">
                <h1 className="text-[13px] md:text-[14px] lg:text-[16px] font-lexend font-medium  text-[#282828] uppercase ">
                  Why Shop With Us?
                </h1>
                <div className="flex 2xl:flex-col flex-row flex-wrap lg:gap-0 2xl:space-x-0 lg:space-x-5 md:space-x-4 space-x-2 xl:space-x-6 md:mt-4 mt-2 lg:mt-5 font-alan font-[300] space-y-1.5 md:space-y-3 text-[12px] md:text-[13px] lg:text-[14px]">
                  {trustBadges.map(({ id, title, icon }) => {
                    return (
                      <div key={id}>
                        <p>{title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
          <ExploringSection />
          <DealsSection />
          <NewProducts />
          <div className="max-w-[1700px] overflow-hidden mx-auto">
            <div className="flex items-center gap-2 px-3 ">
              <div
                onClick={() =>
                  dispatch(switchToSellAndReviewHandle("Most Selling"))
                }
                className={`flex cursor-pointer items-center gap-2 ${
                  switchData === "Most Selling"
                    ? "text-gray-700"
                    : "text-gray-400"
                }`}
              >
                <Headings1
                  className={
                    switchData === "Most Selling"
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  Most Selling
                </Headings1>
                <MdOutlineKeyboardArrowRight className="text-2xl font-medium" />
              </div>
              <div
                onClick={() =>
                  dispatch(switchToSellAndReviewHandle("Most Review"))
                }
                className="flex cursor-pointer items-center gap-2 "
              >
                <Headings1
                  className={
                    switchData === "Most Review"
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  Most Review
                </Headings1>
              </div>
            </div>
            <div
              className="flex items-center transition duration-700 ease-in-out"
              style={
                switchData === "Most Selling"
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(-100%)` }
              }
            >
              <div className="shrink-0 w-full ">
                <MostSeeling />
              </div>
              <div className="shrink-0 w-full ">
                <MostReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
