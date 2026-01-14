import React, { use, useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import Headings1 from "../common/Headings";
import Button from "../common/Button";
import { Link } from "react-router";
import ProductCart from "../common/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { dealsHandle, nextDeals, prevDeals } from "../../redux/slice";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
function DealsSection() {
  const dispatch = useDispatch();

  const [allDates, setDates] = useState({
    hour: "",
    minute: "",
    second: "",
    day: "",
  });

  const updateDates = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();

    const hour = 24 - date.getHours();
    const minute = 60 - date.getMinutes();
    const second = 60 - date.getSeconds();
    const day = lastDay - date.getDate();

    setDates({ hour, minute, second, day });
  };

  useEffect(() => {
    updateDates();

    const timer = setInterval(updateDates, 1000);

    return () => clearInterval(timer);
  }, []);

  // fetch data for deals section
  const allProduct = useSelector((state) => state.dealsProduct);
  useEffect(() => {
    if (allProduct.length === 0) {
      const fetchProducts = async () => {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        dispatch(dealsHandle(data.products));
      };
      console.log("hello");
      fetchProducts();
    }
  }, []);

  // const [afterFilter, setAfterFilter] = useState([]);

  const refer = useSelector((state) => state.getProductForDealsSlider);
  // useEffect(() => {
  //   gettingDealsData.map((data, idx) => {
  //     if (idx >= 0 && idx <= 2) {
  //       setAfterFilter((prev) => [...prev, data]);
  //     }
  //     if (idx >= 11 && idx <= 14) {
  //       setAfterFilter((prev) => [...prev, data]);
  //     }
  //     if (idx >= 21 && idx <= 23) {
  //       setAfterFilter((prev) => [...prev, data]);
  //     }
  //   });
  // }, [gettingDealsData]);
  // make functionality for deals product slider
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
    dispatch(nextDeals(totalSlide));
  };
  const prevSlide = () => {
    dispatch(prevDeals(totalSlide));
  };

  const slide = useSelector((state) => state.dealsProductSlider);

  return (
    <div>
      <Container>
        <div>
          <Headings1>Super Deals on This Month</Headings1>

          <div className="flex lg:flex-row flex-col my-3 md:my-5 items-center gap-2 h-auto lg:py-2 py-8 lg:h-auto overflow-hidden border border-gray-300 rounded-lg  ">
            <div className=" relative lg:w-[25%] w-full xl:w-[23%] h-full flex flex-col items-center justify-center ">
              <div id="" className=" flex justify-between items-center ">
                <div
                  onClick={prevSlide}
                  className="px-3 py-2 cursor-pointer bg-[#FF6C00] rounded-l-full text-2xl text-white"
                >
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div
                  onClick={nextSlide}
                  className="px-3 py-2 cursor-pointer bg-[#FF6C00] rounded-r-full text-2xl text-white"
                >
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <h1 className="font-alan text-[#FF6C00] mb-3 md:text-xl text-lg lg:text-2xl font-semibold">
                Super Deals
              </h1>
              <div className="flex px-5 py-2 rounded-full bg-[#feebeb] items-center gap-2 font-lexend text-gray-800 font-medium md:text-[18px] text-[16px] lg:text-xl">
                <h3>Ends in: </h3>
                <p>{allDates.day}:</p>
                <p>{allDates.hour}:</p>
                <p>{allDates.minute}:</p>
                <p>{allDates.second}</p>
              </div>
              <Link to={"/deals"}>
                <Button className={"mt-4"}>Shop now</Button>
              </Link>
            </div>

            <div className="w-full lg:w-[80%] overflow-hidden flex items-center h-full ">
              {refer.length > 0 &&
                refer.map(
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
                          discount={
                            <div className="flex w-full items-center justify-between">
                              <p className="text-[11px] md:text-[12px] text-gray-300 font-alan bg-[#cc0c39] px-1 md:px-1.5 py-0.5 font-medium md:py-1 rounded-lg">
                                {discountPercentage}%
                              </p>
                              <p className="text-[#cc0c39] text-[12px] md:text-[13px] font-alan font-medium">
                                Limited time deal
                              </p>
                            </div>
                          }
                          discountParcent={discountPercentage}
                        />
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DealsSection;
