import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../../classReplace/replace";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice";

function ProductCart({
  heartIcon,
  viewIcon,
  title,
  price,
  mainPrice,
  discount,
  discountParcent,
  rating,
  img,
  className,
  itemId,
  item,
}) {
  const dispatch = useDispatch();

  const addItems = (mainItem) => {
    dispatch(addToCart(mainItem));
  };

  
    

  return (
    <div
      className=" w-full p-2 cartParent "
      // onMouseOver={animateFunc}
      // onMouseLeave={animateFinish}
    >
      <div className="border border-gray-300 p-2 rounded-lg">
        <div className={cn("w-full", className)}>
          <div className="w-full overflow-hidden relative">
            <img className="w-full " src={img} alt="" />
            <div className="absolute right-2 text-gray-700 bottom-3">
              <div className="cartAnimate p-2 rounded-full bg-white cursor-pointer">
                <FaRegHeart />
              </div>
              <div className="cartAnimate p-2 rounded-full bg-white mt-2 cursor-pointer">
                <AiOutlineEye />
              </div>
            </div>
          </div>
          <div className="text-gray-700">
            <div className="flex items-center justify-between py-1">
              {discount}
            </div>
            <p className=" font-normal font-alan  text-[15px] line-clamp-2 tracking-tight leading-[17px]">
              {title}
            </p>
            <div className="w-full">{rating}</div>
            <div className="flex font-lexend items-center text-[16px] font-medium gap-2">
              <p className="text-[#FF6C00]">${price}</p>
              <p className="line-through text-gray-500 text-[13px]">
                ${((price * discountParcent) / 100 + price).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-1.5" onClick={() => addItems(item)}>
          <Button className={"w-full"}>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
