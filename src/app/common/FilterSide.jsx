import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  filterPriceHandle,
  hightPriceHandle,
} from "../../redux/slice";

function FilterSide({ pages, categories, maxPrice, minPrice }) {
  const dispatch = useDispatch();
  const filterbyPrice = useSelector((state) => state.filterByPrice);
  const [priceInput, setPriceInput] = useState(filterbyPrice.lowPrice);
  const [highPrice, setHighPrice] = useState(filterbyPrice.highPrice);
  const inputHandle = (e) => {
    setPriceInput(e.target.value);
  };
  const inputHandle2 = (e) => {
    setHighPrice(e.target.value);
  };
  useEffect(() => {
    dispatch(filterPriceHandle(priceInput));
  }, [priceInput]);
  useEffect(() => {
    dispatch(hightPriceHandle(highPrice));
  }, [highPrice]);

  // get filter by category item
  const filterbyCategory = useSelector((state) => state.filterByCategories);

  return (
    <div>
      <div className="">
        <div className="w-full bg-[#FF6C00]  py-3 px-5 rounded-tl-lg rounded-tr-lg">
          <p className="text-[17px] font-alan font-medium text-white uppercase">
            {" "}
            Filter Product By
          </p>
        </div>
        <div className="border px-3 py-4 border-gray-300">
          <div className={`${categories.length > 0 ? "block" : "hidden"}`}>
            <p
              className={`font-alan text-[13px] text-gray-700  uppercase sm2:text-[14px] md:text-[15px] font-medium `}
            >
              Categories
            </p>
            <div className="flex py-3 mb-3 font-alan font-normal text-gray-700 items-center gap-2 flex-wrap">
              {categories.length > 0 &&
                categories.map((category, idx) => {
                  return (
                    <div
                      onClick={() =>
                        dispatch(filterByCategory(categories[idx]))
                      }
                      className={`${filterbyCategory === category ? "bg-[#FF6C00] text-white" : "bg-transparent"} px-1.5 py-0.5 rounded-lg text-[13px] hover:bg-[#FF6C00]  hover:text-white transition duration-300 cursor-pointer border-[#FF6C00] border`}
                    >
                      <p className="  ">{category}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <p className="font-alan text-[13px] text-gray-700  uppercase sm2:text-[14px] md:text-[15px] font-medium">
            Price
          </p>
          <div className="flex bg-[#ff6c00] rounded-full h-2.5 items-center w-fit mt-5">
            <input
              type="range"
              min={minPrice}
              max={Math.round(maxPrice / 2)}
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              className=" appearance-none w-[50%]  range-slider outline-none"
            />
            <input
              type="range"
              min={Math.round(maxPrice / 2 + 1)}
              max={maxPrice}
              value={filterbyPrice.highPrice}
              onChange={(e) => setHighPrice(e.target.value)}
              className="appearance-none  w-[50%] range-slider outline-none"
            />
          </div>
          <div className="flex items-center gap-2 mt-6 font-comforta text-[15px]">
            <div className="flex items-center gap-2 w-[40%]">
              <span className="text-gray-500 text-[14px]">$</span>
              <div className="border  border-gray-300 rounded px-3 py-2 text-[14px] text-gray-700">
                <input
                  type="number"
                  value={Math.floor(filterbyPrice.lowPrice)}
                  onChange={inputHandle}
                  className="h-full w-full outline-none border-none"
                />
              </div>
            </div>
            -
            <div className="flex w-[40%] items-center gap-2">
              <span className="text-gray-500 text-[14px]">$</span>
              <div className="border w-full border-gray-300 rounded px-3 py-2 text-[14px] text-gray-700">
                <input
                  type="number"
                  value={Math.floor(filterbyPrice.highPrice)}
                  onChange={inputHandle2}
                  className="h-full w-full outline-none border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSide;
