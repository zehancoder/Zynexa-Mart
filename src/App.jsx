import { useEffect, useState } from "react";
import "./App.css";
import Navber from "./app/navberFooter/Navber";
import Footer from "./app/navberFooter/Footer";
import Routing from "./app/routes/Routing";
import { useDispatch, useSelector } from "react-redux";
import ViewProduct from "./app/common/ViewProduct";
import { filterByCategory, productSuccessFullyAddedMsg } from "./redux/slice";
import { useLocation, useNavigate } from "react-router";

function App() {
  const dispatch = useDispatch();
  const productViewFromStore = useSelector((state) => state.productViewingItem);
  const productAddedStateMsg = useSelector((state) => state.addMessege);
  useEffect(() => {
    setTimeout(() => {
      dispatch(productSuccessFullyAddedMsg(false));
    }, 2000);
  }, [productAddedStateMsg]);

  return (
    <>
      <Navber />
      <div className="lg:h-[200px] h-[150px]"></div>
      {productViewFromStore && (
        <div
          id="viewProduct"
          className="fixed z-50 top-[37%] left-[50%] transform -translate-x-[50%] h-[40%] lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] xl:w-[30%] -translate-y-[40%]"
        >
          <ViewProduct
          // className={"bg-white"}
          // title={productViewFromStore.title}
          // img={productViewFromStore.images[0]}
          // price={productViewFromStore.price}
          // discount={productViewFromStore.discountParsentage}
          />
        </div>
      )}
      {productViewFromStore && <div className="overlay z-40"></div>}
      {/* product add to cart messege */}
      {
        <div
          className={` transform transition duration-300 fixed px-2 py-2 rounded-lg z-50 border border-gray-700 md:bottom-16 bottom-12 lg:bottom-20 md:right-16 right-12 lg:right-20 text-white ${productAddedStateMsg ? "translate-x-0" : "translate-x-[170%]"}`}
        >
          <p className="bg-[#FF6C00] rounded-lg font-alan md:text-[15px] text-[14px] lg:text-[16px] font-medium md:px-2 px-1.5 lg:px-3 md:py-2 py-1.5 lg:py-3 customShadow">
            Succesfully Added!
          </p>
        </div>
      }
      <Routing />

      <Footer />
    </>
  );
}

export default App;
