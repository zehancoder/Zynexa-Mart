import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductShowPage from "../../../common/ProductShowPage";
import Loading from "../../../common/Loading";
function SmartPhoneTablet() {
  const dispatch = useDispatch()
  const electronicsDataFromStore = useSelector((state) => state.electronics);
  const [smartPhoneTablet, setSmartPhoneTablet] = useState([]);
  useEffect(() => {
    electronicsDataFromStore.map((items) => {
      if (items.category === "smartphones" || items.category === "tablets") {
        setSmartPhoneTablet(prev => [...prev, items])
      }
      
    });
  }, [electronicsDataFromStore]);


  return (
    <div>
      <ProductShowPage text={'Smartphones and Tablet'} showingProduct={smartPhoneTablet || []} />
    </div>
  );
}

export default SmartPhoneTablet;
