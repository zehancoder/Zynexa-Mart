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

  console.log(watches);
  

  return (
    <div>
      <ProductShowPage category={['Mens-Watches', 'Womens-Watches', 'Fashion Timepieces', 'Rolex', 'Fashion Co.', 'Longines', 'All']} text={'Watches'} showingProduct={watches || []} />
    </div>
  );
}

export default SmartWatches;
