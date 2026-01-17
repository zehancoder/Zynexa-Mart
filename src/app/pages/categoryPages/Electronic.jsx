import React, { useEffect, useState } from "react";
import Container from "../../common/Container";
import Headings1 from "../../common/Headings";
import { useDispatch, useSelector } from "react-redux";
import { electronicsHandle, loadingHandle } from "../../../redux/slice";
import ProductCart from "../../common/ProductCart";
import FilterSide from "../../common/FilterSide";
import { BsDatabase } from "react-icons/bs";
import Loading from "../../common/Loading";
import ProductShowPage from "../../common/ProductShowPage";

function Electronic() {
  const dispatch = useDispatch();

  const electronicsDataFromStore = useSelector((state) => state.electronics);

  const loading = useSelector((state) => state.loading);

  console.log(electronicsDataFromStore);

  return (
    <div>
      <ProductShowPage text={"Electronics"} category={['Smartphone', 'Tablet', 'Laptop', 'Headphone', 'Earbuds', 'Watches'] || []} showingProduct={electronicsDataFromStore || []} />
    </div>
  );
}

export default Electronic;
