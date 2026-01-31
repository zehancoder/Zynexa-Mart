import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Headings1 from "../common/Headings";
import ProductCart from "../common/ProductCart";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  nextDeals,
  nextNewProduct,
  prevDeals,
  prevNewProduct,
} from "../../redux/slice";
import Button from "../common/Button";
import { Link } from "react-router";
function NewProducts() {
  const dispatch = useDispatch();
  // make functionality for new product slider
  const [totalSlide, setTotalSlide] = useState(4);
  useEffect(() => {
    if (window.innerWidth >= 1530) {
      setTotalSlide(4);
    } else if (window.innerWidth >= 1281) {
      setTotalSlide(5);
    } else if (window.innerWidth >= 1025) {
      setTotalSlide(6);
    } else if (window.innerWidth >= 769) {
      setTotalSlide(6);
    } else if (window.innerWidth >= 640) {
      setTotalSlide(7);
    } else if (window.innerWidth >= 0) {
      setTotalSlide(8);
    }
  }, [window.innerWidth]);
  const nextSlide = () => {
    dispatch(nextNewProduct(totalSlide));
  };
  const prevSlide = () => {
    dispatch(prevNewProduct(totalSlide));
  };

  const slide = useSelector((state) => state.newProductSlider);

  // const [afterFilter, setAfterFilter] = useState([]);

  const gettingDealsData = useSelector((state) => state.getProductForSlider);

  // useEffect(() => {
  //   gettingDealsData.map((data, idx) => {
  //     if (idx >= 3 && idx <= 6) {
  //       setAfterFilter((prev) => [...prev, data]);
  //     }
  //     if (idx >= 15 && idx <= 17) {
  //       setAfterFilter((prev) => [...prev, data]);
  //     }
  //     if (idx >= 24 && idx <= 26) {
  //       setAfterFilter((prev) => [...prev, data]);
  //     }
  //   });
  // }, [gettingDealsData]);

  return (
    <div>
      <Container>
        <div>
          <Headings1>New Release • Save Big Today</Headings1>
          <div className="flex lg:flex-row flex-col my-3 md:my-5 items-center gap-2 h-auto lg:py-2 py-3 md:py-8 lg:h-auto overflow-hidden border border-gray-300 rounded-lg  ">
            <div className=" relative lg:w-[25%] w-full xl:w-[23%] h-full flex flex-col items-center justify-center ">
              <div id="" className=" flex justify-between items-center ">
                <div
                  onClick={prevSlide}
                  className="px-1.5 md:px-3 py-1 md:py-2 cursor-pointer bg-[#FF6C00] rounded-l-full text-2xl text-white"
                >
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div
                  onClick={nextSlide}
                  className="px-1.5 md:px-3 py-1 md:py-2 cursor-pointer bg-[#FF6C00] rounded-r-full text-2xl text-white"
                >
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <h1 className="font-alan text-[#FF6C00] mb-1 md:mb-3 md:text-xl text-lg lg:text-2xl font-semibold">
                Latest Picks
              </h1>
              <h1 className="font-alan text-gray-700 mb-1 md:mb-3 md:text-lg text-base text-center md:w-[90%] w-full lg:w-[80%] lg:text-xl font-medium">
                Launch Offer: Get Yours at a Discount
              </h1>
              <Link to={"/newProduct"}>
                <Button className={"mt-1 md:mt-4"}>Browse All</Button>
              </Link>
            </div>

            <div className="w-full lg:w-[80%] overflow-hidden flex items-center h-full ">
              {gettingDealsData.length > 0 &&
                gettingDealsData.map(
                  ({ id, price, images, title, discountPercentage }, idx) => {
                    return (
                      <div
                        key={idx}
                        className="md:w-[25%] w-[50%] sm:w-[33.33%] xl:w-[20%] 2xl:w-[16.6%] shrink-0 rounded-lg h-ful  transform transition duration-700 "
                        style={{
                          transform: `translateX(-${slide.sliderTranslate}%)`,
                        }}
                      >
                        <ProductCart
                          price={price}
                          img={images[0]}
                          title={title}
                          discountParcent={discountPercentage}
                          discount={
                            <p className="text-[11px] md:text-[12px] text-gray-300 font-alan bg-[#cc0c39] px-1 md:px-1.5 py-0.5 font-medium md:py-1 rounded-lg">
                              {discountPercentage}%
                            </p>
                          }
                          item={gettingDealsData[idx]}
                        />
                      </div>
                    );
                  },
                )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewProducts;
