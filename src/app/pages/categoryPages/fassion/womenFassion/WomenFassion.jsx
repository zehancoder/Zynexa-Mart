import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../../common/ProductShowPage";
import { useSelector } from "react-redux";

function WomenFassion() {
  const womenFassionFromStore = useSelector(
    (state) => state.fassion.womenFassion.allFassion
  );
  console.log(womenFassionFromStore.map((item) => {
    return item.category
  }));
  
  return (
    <div>
      <ProductShowPage
        showingProduct={womenFassionFromStore || []}
        text={"Women's Fassion"}
        category={['Dresses', 'Watches', 'Bags', 'Shoes', 'Jewellery', 'Tops']}
      />
    </div>
  );
}

export default WomenFassion;
