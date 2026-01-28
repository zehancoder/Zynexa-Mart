import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../common/ProductCart";
import Container from "../../common/Container";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeFromCart,
  viewProductHandle,
} from "../../../redux/slice";
import Button from "../../common/Button";
import { Link } from "react-router";

function Cart() {
  const getCartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const decressQuantity = (product) => {
    dispatch(decreaseProductQuantity(product));
  };
  const incressQuantity = (product) => {
    dispatch(increaseProductQuantity(product));
  };

  // update product total price with quantity
  const [prevPrice, setPrevPrice] = useState(0);
  const priceTrack = () => {
    setPrevPrice(0);
    getCartItem.map((product, idx) => {
      setPrevPrice(
        (prev) => prev + getCartItem[idx].price * getCartItem[idx].itemQuantity,
      );
    });
  };
  useEffect(() => {
    priceTrack();
  }, [getCartItem]);

  // chech total price
  const [check, setCheck] = useState(false);
  // order now state
  const [order, setOrder] = useState(false);
  const [orderMessage, setOrderMessage] = useState(false);

  const orderCompleteFunc = () => {
    setOrder(true);

    setTimeout(() => {
      setOrderMessage(true);
      setOrder(false);
    }, 1000);
  };
  return (
    <div
      className={`relative ${getCartItem.length < 1 ? "h-[60vh]" : "h-auto"}`}
    >
      <Container>
        {getCartItem.length < 1 ? (
          <h1 className="text-3xl font-medium font-alan absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            No Item in Your Cart
          </h1>
        ) : (
          <div className="lg:flex justify-between gap-2">
            <div className="md:w-[95%] w-full lg:w-[65%] xl:w-[70%] mx-auto">
              {getCartItem.map((product, idx) => {
                return (
                  <div
                    className=" h-[150px] p-2 cartParent relative"
                    // onMouseOver={animateFunc}
                    // onMouseLeave={animateFinish}
                  >
                    <div
                      onClick={() => dispatch(removeFromCart(getCartItem[idx]))}
                      className=" absolute top-3 right-3 text-2xl cursor-pointer p-0.5 hover:bg-[#FF6C00] hover:text-white transition duration-300 rounded-full"
                    >
                      <IoIosClose />
                    </div>
                    <div className="border h-full border-gray-300 p-2 rounded-lg">
                      <div
                        className={`h-full flex gap-2 items-center`}
                      >
                        <div className="w-[30%] md:w-[23%] xl:w-[20%] h-full overflow-hidden relative">
                          <img
                            className="w-[100%] h-full object-contain"
                            src={product.images[0]}
                            alt=""
                          />
                          <div className="absolute right-2 text-gray-700 bottom-3">
                            <div className="cartAnimate p-2 rounded-full bg-white cursor-pointer">
                              <FaRegHeart />
                            </div>
                            <div
                              onClick={() =>
                                dispatch(viewProductHandle(product))
                              }
                              className="cartAnimate p-2 rounded-full bg-white mt-2 cursor-pointer"
                            >
                              <AiOutlineEye />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between w-[70%] md:w-[77%] xl:w-[80%]">
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
                                  (product.price * product.discountPercentage) /
                                    100 +
                                  product.price
                                ).toFixed(2)}
                              </p>
                            </div>

                            <div className=" text-[12px] font-alan mt-3 flex items-center justify-between w-[80px]">
                              <div
                                className="py-[1.5px] cursor-pointer hover:text-white transition duration-300 px-1 border hover:bg-[#FF6C00] border-[#FF6C00]"
                                onClick={() => {
                                  decressQuantity(product);
                                }}
                              >
                                <FiMinus />
                              </div>
                              <p>{product.itemQuantity}</p>
                              <div
                                className="py-[1.5px] cursor-pointer hover:text-white transition duration-300 px-1 border hover:bg-[#FF6C00] border-[#FF6C00]"
                                onClick={() => {
                                  incressQuantity(product);
                                }}
                              >
                                <FiPlus />
                              </div>
                            </div>
                          </div>

                          <div className="py-2 w-[70%] text-gray-700 font-alan text-[14px] font-medium px-10">
                            <p>
                              <span className="text-[15px] text-[#FF6C00]">
                                Description:{" "}
                              </span>
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-200 mx-auto font-alan w-[90%] md:w-[60%] lg:w-[35%] xl:w-[30%] h-[300px] px-3 py-4 rounded-lg relative">
              <div className="text-gray-700">
                <h1 className="text-2xl font-alan font-medium text-[#FF6C00]">
                  Order Summery
                </h1>
                <p className="font-normal text-[15px] mt-5">
                  Subtotal ({getCartItem.length} items)
                </p>
                <p className="font-normal text-[15px] mt-2">
                  Shipping Fee: ${getCartItem.length * 10}
                </p>
              </div>
              <div className="flex items-center mt-10 border-t border-gray-400">
                <div className="border-r border-gray-400 px-3 py-4">
                  <h1 className="text-[15px] mt-1 font-alan font-normal text-gray-700">
                    Product Price: ${Math.floor(prevPrice)}
                  </h1>
                  <h1 className="text-[15px] mt-1 font-alan font-normal text-gray-700">
                    Shipping Fee: ${getCartItem.length * 10}
                  </h1>
                  <div onClick={() => setCheck(true)}>
                    <Button className={"w-full mt-4"}>Procced to Check</Button>
                  </div>
                </div>
                {check && (
                  <div className="px-3 mt-6">
                    <h1 className="text-[18px] mt-1 font-alan font-medium text-gray-700">
                      Total Price: $
                      {getCartItem.length * 10 + Math.floor(prevPrice)}
                    </h1>
                    {order ? (
                      <div onClick={() => orderCompleteFunc()}>
                        <Button className={"w-full mt-3"}>
                          Order Process...
                        </Button>
                      </div>
                    ) : orderMessage ? (
                      <div onClick={() => orderCompleteFunc()}>
                        <Button className={"w-full mt-3"}>Order Success</Button>
                      </div>
                    ) : (
                      <div onClick={() => orderCompleteFunc()}>
                        <Button className={"w-full mt-3"}>Order Now</Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>

      {orderMessage && (
        <div className="bg-white sm:w-[60%] sm2:w-[70%] w-[85%] md:w-[50%] lg:w-[43%] xl:w-[33%] 2xl:w-[27%]  customShadow2 font-alan rounded-lg px-8 py-5 absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50">
          <div className="">
            <div className="w-[60%] mx-auto">
              <img className="mx-auto" src="/images/orderSuccess.png" alt="" />
            </div>
            <h1 className="text-xl font-medium text-center text-gray-700 mt-4">
              Thank you for ordering!
            </h1>
            <p className="text-gray-500 text-center mt-3 text-[14px] font-normal">
              Your items will be packed and shipped soon. Once dispatched,
              you’ll receive tracking details to follow your delivery. Thank you
              for shopping with us—we appreciate your trust!
            </p>
            <div className="flex items-center justify-around mt-5">
              <Link to={"/orders"}>
                <Button
                  className={
                    "bg-transparent text-[#FF6C00] border border-[#FF6C00]"
                  }
                >
                  View Order
                </Button>
              </Link>
              <Link to={"/product"}>
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          </div>
          <div
            onClick={() => {
              setOrderMessage(false);
            }}
            className="font-alan text-[26px] text-gray-700 font-medium absolute top-1 p-0.5 transition duration-300 rounded-full hover:text-white cursor-pointer hover:bg-[#FF6C00] right-1"
          >
            <IoIosClose />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
