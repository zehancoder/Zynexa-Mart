import { useState } from "react";
import "./App.css";
import Navber from "./app/navberFooter/Navber";
import Footer from "./app/navberFooter/Footer";
import Routing from "./app/routes/Routing";
import { useSelector } from "react-redux";
import ViewProduct from "./app/common/ViewProduct";

function App() {
  const productViewFromStore = useSelector((state) => state.productViewingItem);
  return (
    <>
      <Navber />
      <div className="h-[200px]"></div>
      {productViewFromStore && (
        <div
          id="viewProduct"
          className="fixed z-50 top-[40%] left-[50%] transform -translate-x-[50%] h-[40%] w-[30%] -translate-y-[40%]"
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

      <Routing />

      <Footer />
    </>
  );
}

export default App;
