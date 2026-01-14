import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../common/ProductShowPage";
import { useSelector } from "react-redux";

function Shoes() {
  const [shoes, setShoes] = useState([]);
  const womenFassionFromStore = useSelector(
    (state) => state.fassion.womenFassion.allFassion
  );
  const menFasionFromStore = useSelector(
    (state) => state.fassion.menFassion.allFassion
  );

  useEffect(() => {
    womenFassionFromStore.map((item) => {
      if(item.category === 'womens-shoes'){
        setShoes(prev => [...prev, item])
      }
    });
    menFasionFromStore.map((item) => {
      if(item.category === 'mens-shoes'){
        setShoes(prev => [...prev, item])
      }
      console.log(item.category);
      
    });
  }, [menFasionFromStore, womenFassionFromStore]);

  console.log(shoes);
  

  return (
    <div>
      <ProductShowPage
        showingProduct={shoes || []}
        text={"Shoes"}
      />
    </div>
  );
}

export default Shoes;
