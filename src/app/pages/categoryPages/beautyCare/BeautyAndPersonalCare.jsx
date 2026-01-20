import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../common/ProductShowPage";
import loadShopData from "./fetchBeautyProduct";
import { useDispatch, useSelector } from "react-redux";
import { beautyAndPersonalCareHandle } from "../../../../redux/slice";
function BeautyAndPersonalCare() {
  const beautyData = useSelector((state) => state.beautyAndPersonalCare);
  const dispatch = useDispatch();
  useEffect(() => {
    if (beautyData.length === 0) {
      loadShopData().then((data) => {
        dispatch(
          beautyAndPersonalCareHandle([
            data.beautyItem.products,
            data.fragrancesItem.products,
            data.skinCareItem.products,
          ].flat(),)
        );
      });
    }
  }, []);

  console.log(beautyData.map(({category}) => category));

  return (
    <div>
      <ProductShowPage
        category={['Beauty', 'Fragrances', 'Skin-Care', 'All']}
        showingProduct={beautyData || []}
        text={"Beauty and Personal Care"}
      />
    </div>
  );
}

export default BeautyAndPersonalCare;
