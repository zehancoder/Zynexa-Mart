import React from 'react'
import ProductShowPage from '../../../common/ProductShowPage';
import { useSelector } from 'react-redux';
function HomeFurniture() {
    // geeting accessories from store
  const homeApplianceFurnitureFromStore = useSelector(
    (state) => state.homeAppelianceFurniture
  );
  return (
    <div>
        <ProductShowPage text={'Home Appeliance & Furniture'} showingProduct={homeApplianceFurnitureFromStore || []}/>
    </div>
  )
}

export default HomeFurniture