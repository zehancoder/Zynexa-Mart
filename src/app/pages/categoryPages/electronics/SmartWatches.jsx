import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductShowPage from "../../../common/ProductShowPage";
function SmartWatches() {
  const dispatch = useDispatch()
  const electronicsDataFromStore = useSelector((state) => state.electronics);
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    electronicsDataFromStore.map((items) => {
      if (items.category === "womens-watches" || items.category === "mens-watches") {
        setWatches(prev => [...prev, items])
      }
      
    });
  }, [electronicsDataFromStore]);


  return (
    <div>
      <ProductShowPage text={'Watches'} showingProduct={watches || []} />
    </div>
  );
}

export default SmartWatches;
