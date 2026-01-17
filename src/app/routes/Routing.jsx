import React from "react";
import { Route, Routes } from "react-router";
import Product from "../pages/Product";
import HomePage from "../landing/HomePage";
import Deals from "../pages/Deals";
import Electronic from "../pages/categoryPages/Electronic";
import SmartPhoneTablet from "../pages/categoryPages/electronics/SmartPhoneTablet";
import ComputerLaptop from "../pages/categoryPages/electronics/ComputerLaptop";
import ManFassion from "../pages/categoryPages/fassion/manFassion/ManFassion";
import WomenFassion from "../pages/categoryPages/fassion/womenFassion/WomenFassion";
import SmartWatches from "../pages/categoryPages/electronics/SmartWatches";
import Shoes from "../pages/categoryPages/fassion/Shoes";
import Bags from "../pages/categoryPages/fassion/Bags";
import Accessories from "../pages/categoryPages/fassion/Accessories";
import HeadphoneAirbird from "../pages/categoryPages/electronics/HeadphoneAirbird";
import HomeFurniture from "../pages/categoryPages/homeFurniture/HomeFurniture";
import BeautyAndPersonalCare from "../pages/categoryPages/beautyCare/BeautyAndPersonalCare";
import Cart from "../pages/cart/Cart";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/shop-now/electronics" element={<Electronic />} />
      <Route
        path="/shop-now/electronics/smartphones-tablet"
        element={<SmartPhoneTablet />}
      />
      <Route
        path="/shop-now/electronics/computers-laptops"
        element={<ComputerLaptop />}
      />
      <Route
        path={`/shop-now/electronics/smart-watches`}
        element={<SmartWatches />}
      />
      <Route path={`/shop-now/fassion/watches`} element={<SmartWatches />} />
      <Route path="/shop-now/fassion/mens-fassion" element={<ManFassion />} />
      <Route
        path="/shop-now/fassion/womens-fassion"
        element={<WomenFassion />}
      />
      <Route path="/shop-now/fassion/shoes" element={<Shoes />} />
      <Route path="/shop-now/fassion/handbags" element={<Bags />} />
      <Route path="/shop-now/fassion/accessories" element={<Accessories />} />
      <Route
        path="/shop-now/electronics/headphones-earbuds"
        element={<HeadphoneAirbird />}
      />
      <Route path="/shop-now/home&furniture" element={<HomeFurniture />} />
      <Route
        path="/shop-now/beauty&personalcare"
        element={<BeautyAndPersonalCare />}
      />
    </Routes>
  );
}

export default Routing;
