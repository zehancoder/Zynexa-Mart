import React, { useEffect, useState } from "react";
import ProductShowPage from "../../../common/ProductShowPage";
import { useSelector } from "react-redux";

function ComputerLaptop() {
  const electronicProduct = useSelector((state) => state.electronics);
  const [computerAndLaptop, setComputerAndLaptop] = useState([]);
  useEffect(() => {
    electronicProduct.map((items) => {
      if (items.category === "laptops") {
        setComputerAndLaptop((prev) => [...prev, items]);
      }
    });
    
  }, [electronicProduct]);

  console.log(computerAndLaptop);
  
  return (
    <div>
      <ProductShowPage
        showingProduct={computerAndLaptop || []}
        text={"Computer and Laptop"}
      />
    </div>
  );
}

export default ComputerLaptop;
