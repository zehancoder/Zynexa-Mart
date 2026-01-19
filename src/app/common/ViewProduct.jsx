import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../classReplace/replace";
import Button from "./Button";
import { IoIosClose } from "react-icons/io";
import {
  addToCart,
  productSuccessFullyAddedMsg,
  viewProductHandle,
} from "../../redux/slice";

function ViewProduct({ className }) {
  const productViewFromStore = useSelector((state) => state.productViewingItem);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productViewFromStore) {
    }
  }, [productViewFromStore]);

  const closeView = () => {
    dispatch(viewProductHandle(null));
  };

  const addItems = (mainItem) => {
    const addQuan = {
      ...mainItem,
      itemQuantity: 1,
    };
    dispatch(addToCart(addQuan));
    dispatch(productSuccessFullyAddedMsg(true));
  };

  const cartProdutFromStore = useSelector((state) => state.cartItem);

  // track seleted image for showing
  const [selectedImg, setSelectedImg] = useState(
    productViewFromStore.images[0],
  );

  return (
    <div
      className=" w-full p-2 cartParent relative"
      // onMouseOver={animateFunc}
      // onMouseLeave={animateFinish}
    >
      <div className=" absolute top-[7%] left-[8%] px-3 py-1 rounded-sm bg-[#cc0c39] text-white font-alan font-normal text-[13px]">
        {productViewFromStore.discountPercentage}%
      </div>

      <div className="border border-gray-300 p-2 rounded-lg">
        <div className={cn("w-full px-4 py-3 rounded-lg bg-white", className)}>
          <div className="w-[70%] mx-auto overflow-hidden px-4 py-4 relative">
            <img className="w-full " src={selectedImg} alt="" />
          </div>
          <div className="flex justify-between">
            <div className="w-[65%] border-r border-gray-400">
              <div className="flex items-center flex-wrap gap-2">
                {productViewFromStore.images.map((product, idx) => (
                  <div
                    onClick={() =>
                      setSelectedImg(productViewFromStore.images[idx])
                    }
                    className={`w-[21%] px-1 py-2 cursor-pointer border-[0.6px] transition duration-300 hover:border-[#FF6C00] rounded ${selectedImg === product ? "border-[#FF6C00]" : "border-[#282828]"}`}
                  >
                    <img src={product} alt="" />
                  </div>
                ))}
              </div>
              <div className="text-gray-700 px-2 py-3">
                <div className="flex items-center justify-between py-1">
                  {productViewFromStore.discount}
                </div>
                <p className=" font-normal font-alan  text-[15px] line-clamp-2 tracking-tight leading-[17px]">
                  {productViewFromStore.title}
                </p>
                <div className="w-full  font-alan font-normal text-[13px]">
                  <p>Rating: {productViewFromStore.rating}</p>
                </div>
                <div className="flex font-lexend items-center text-[16px] font-medium gap-2">
                  <p className="text-[#FF6C00]">
                    ${productViewFromStore.price}
                  </p>
                  <p className="line-through text-gray-500 text-[13px]">
                    $
                    {(
                      (productViewFromStore.price *
                        productViewFromStore.discountPercentage) /
                        100 +
                      productViewFromStore.price
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 py-1.5 text-gray-700 font-alan font-normal text-[13px]">
              <p>Brand: {productViewFromStore.brand}</p>
              <p>Stock: {productViewFromStore.stock}</p>
              <p>
                Weight:{" "}
                {String(productViewFromStore.weight).padEnd("0", "2") +
                  (productViewFromStore.weight < 10 ? "g" : "kg")}
              </p>
              <p>Warrenty: {productViewFromStore.warrantyInformation}</p>
              <p>Shipping: {productViewFromStore.shippingInformation}</p>
            </div>
          </div>
        </div>
        <div
          className="w-full mt-1.5"
          onClick={() => addItems(productViewFromStore)}
        >
          <Button className={"w-full"}>Add To Cart</Button>
        </div>
      </div>

      <div
        onClick={closeView}
        className=" absolute top-5 right-5 text-3xl font-medium text-gray-700 hover:bg-[#FF6C00] hover:text-white rounded-full cursor-pointer transition duration-300"
      >
        <IoIosClose />
      </div>
    </div>
  );
}

export default ViewProduct;
