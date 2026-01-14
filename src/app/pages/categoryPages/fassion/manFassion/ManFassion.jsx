import React, { useEffect, useState } from "react";
import ProductShowPage from '../../../../common/ProductShowPage';
import { useSelector } from "react-redux";

function ManFassion() {
    
    const menFasionFromStore = useSelector(
      (state) => state.fassion.menFassion.allFassion
    );
  return (
    <div>
      <ProductShowPage
        showingProduct={menFasionFromStore || []}
        text={"Men's Fassion"}
      />
    </div>
  );
}

export default ManFassion;
