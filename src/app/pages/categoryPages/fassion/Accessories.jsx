import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../common/ProductShowPage";
import { useSelector } from "react-redux";

function Accessories() {

  const accessoriesFromStore = useSelector(
    (state) => state.fassion.accessories
  );
  accessoriesFromStore.map((t) => {
    console.log(t.category)
  })
  return (
    <div>
      <ProductShowPage
        showingProduct={accessoriesFromStore || []}
        text={"Accessories"}
        category={['Sunglasses', 'Skin-Care', 'Beauty']}
      />
    </div>
  );
}
export default Accessories;
