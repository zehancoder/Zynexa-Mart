import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../common/ProductShowPage";
import { useSelector } from "react-redux";

function Bags() {
  const [bags, setBags] = useState([]);
  const womenFassionFromStore = useSelector(
    (state) => state.fassion.womenFassion.allFassion
  );


  useEffect(() => {
    womenFassionFromStore.map((item) => {
      if(item.category === 'womens-bags'){
        setBags(prev => [...prev, item])
      }      
    });

  }, [womenFassionFromStore]);

  console.log(bags);
  

  return (
    <div>
      <ProductShowPage
        showingProduct={bags || []}
        text={"Bags"}
      />
    </div>
  );
}

export default Bags;
