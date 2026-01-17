import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../common/ProductShowPage";
import loadShopData from "./fetchBeautyProduct";
function BeautyAndPersonalCare() {
  const [beautyCare, setBeautyCare] = useState([]);

  useEffect(() => {
    loadShopData().then((data) => {
      setBeautyCare([data.beautyItem.products, data.fragrancesItem.products, data.skinCareItem.products].flat());
    });
  }, []);

  console.log(beautyCare);
  

  return (
    <div>
      <ProductShowPage showingProduct={beautyCare || []} text={'Beauty and Personal Care'}/>
    </div>
  );
}

export default BeautyAndPersonalCare;
