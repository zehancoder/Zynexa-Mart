import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../../common/ProductCart";
import Container from "../../common/Container";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

function Cart() {
  const getCartItem = useSelector((state) => state.cartItem);

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between gap-2">
          <div className=" w-[70%] mx-auto">
            {getCartItem.map((product) => {
              return (
                <div
                  className=" h-[150px] p-2 cartParent relative"
                  // onMouseOver={animateFunc}
                  // onMouseLeave={animateFinish}
                >
                  <div className=" absolute top-3 right-3 text-2xl cursor-pointer p-0.5 hover:bg-[#FF6C00] hover:text-white transition duration-300 rounded-full">
                    <IoIosClose />
                  </div>
                  <div className="border h-full border-gray-300 p-2 rounded-lg">
                    <div className={`h-full flex `}>
                      <div className="w-[20%] h-full overflow-hidden relative">
                        <img
                          className="w-[100%] h-full object-contain"
                          src={product.images[0]}
                          alt=""
                        />
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
                          {product.discount}
                        </div>
                        <p className=" font-normal font-alan  text-[15px] line-clamp-2 tracking-tight leading-[17px]">
                          {product.title}
                        </p>
                        <div className="w-full font-alan font-normal text-[13px]">
                          Rating:{product.rating}
                        </div>
                        <div className="flex font-lexend items-center text-[16px] font-medium gap-2">
                          <p className="text-[#FF6C00]">${product.price}</p>
                          <p className="line-through text-gray-500 text-[13px]">
                            $
                            {(
                              (product.price * product.discountParcent) / 100 +
                              product.price
                            ).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-1.5 flex items-center justify-between"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
