import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../common/ProductShowPage";
import { useSelector } from "react-redux";

function Accessories() {

  const accessoriesFromStore = useSelector(
    (state) => state.fassion.accessories
  );
  return (
    <div>
      <ProductShowPage
        showingProduct={accessoriesFromStore || []}
        text={"Accessories"}
      />
    </div>
  );
}
export default Accessories;
