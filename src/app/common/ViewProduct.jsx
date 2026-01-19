import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../classReplace/replace";
import Button from "./Button";
import { IoIosClose } from "react-icons/io";
import { addToCart, viewProductHandle } from "../../redux/slice";

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
  };

  const cartProdutFromStore = useSelector((state) => state.cartItem);

  // making alredy
  return (
    <div
      className=" w-full p-2 cartParent relative"
      // onMouseOver={animateFunc}
      // onMouseLeave={animateFinish}
    >
      <div className="border border-gray-300 p-2 rounded-lg">
        <div className={cn("w-full px-4 py-3 rounded-lg bg-white", className)}>
          <div className="w-full overflow-hidden px-4 py-4 relative">
            <img
              className="w-full "
              src={productViewFromStore.images[0]}
              alt=""
            />
          </div>
          <div className="text-gray-700">
            <div className="flex items-center justify-between py-1">
              {productViewFromStore.discount}
            </div>
            <p className=" font-normal font-alan  text-[15px] line-clamp-2 tracking-tight leading-[17px]">
              {productViewFromStore.title}
            </p>
            <div className="w-full font-alan font-normal text-[13px]">Rating:{productViewFromStore.rating}</div>
            <div className="flex font-lexend items-center text-[16px] font-medium gap-2">
              <p className="text-[#FF6C00]">${productViewFromStore.price}</p>
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
