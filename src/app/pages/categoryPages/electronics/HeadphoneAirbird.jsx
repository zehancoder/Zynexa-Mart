import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductShowPage from "../../../common/ProductShowPage";
import Loading from "../../../common/Loading";
function HeadphoneAirbird() {
  const dispatch = useDispatch()
  const electronicsDataFromStore = useSelector((state) => state.electronics);
  const [headphoneAirbird, setHeadphoneAirbird] = useState([]);
  useEffect(() => {
    electronicsDataFromStore.map((items) => {
      if (items.category === "mobile-accessories") {
        setHeadphoneAirbird(prev => [...prev, items])
      }
      
    });
  }, [electronicsDataFromStore]);


  return (
    <div>
      <ProductShowPage text={'Headphone & Airbards'} showingProduct={headphoneAirbird || []} />
    </div>
  );
}

export default HeadphoneAirbird;
