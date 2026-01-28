import React, { useEffect, useState } from "react";
import ProductShowPage from '../../../../common/ProductShowPage';
import { useSelector } from "react-redux";

function ManFassion() {
    
    const menFasionFromStore = useSelector(
      (state) => state.fassion.menFassion.allFassion
    );
    console.log(menFasionFromStore);
    
  return (
    <div>
      <ProductShowPage
        showingProduct={menFasionFromStore || []}
        text={"Men's Fassion"}
        category={['Mens-Shirts', 'Mens-Shoes', 'Mens-Watches', 'All']}
      />
    </div>
  );
}

export default ManFassion;
