import React, { useEffect, useState } from "react";
import ProductShowPage from "../../common/ProductShowPage";
import fetchAllProduct from "./fetchAllProduct";
import Button from "../../common/Button";
import { useSelector } from "react-redux";

function Product() {
  const [product, setProduct] = useState([]);
  const [loadingProductCount, setLoadingProductCount] = useState(20);
  const [loadingProduct, setloadingProduct] = useState([]);
  useEffect(() => {
    fetchAllProduct().then((data) => {
      setProduct(data.product.products);
    });
  }, []);

  const productCategories = useSelector((state) => state.filterByCategories);

  useEffect(() => {
    if (productCategories === "All") {
      setloadingProduct([]);
      product.map((item, idx) => {
        if (idx < loadingProductCount) {
          setloadingProduct((prev) => [...prev, item]);
        }
      });
    } else {
      setloadingProduct([]);
      product.map((item, idx) => {
        if (productCategories.toLowerCase() === item.category) {
          setloadingProduct((prev) => [...prev, item]);
        }
      });
    }
  }, [loadingProductCount, product, productCategories]);

  product.map((item) => {
    console.log(item.category);
  });

  const loading = useSelector((state) => state.loading)
  console.log(loading);
  
  return (
    <div>
      <ProductShowPage
        category={[...new Set(product.map((item) => item.category.slice(0, 1).toUpperCase()+item.category.slice(1, item.category.length))) , 'All']}
        showingProduct={loadingProduct || []}
        text={"Products"}
      />
      <div
        onClick={() =>
          loadingProductCount < product.length &&
          setLoadingProductCount(loadingProductCount + 10)
        }
        className=" text-center mt-4"
      >
        {productCategories === "All" ? loading && (
          <Button
            className={
              " font-alan lg:px-6 lg:text-[15px] lg:py-1 bg-transparent border text-[#FF6C00] hover:bg-[#FF6C00] hover:text-white border-[#FF6C00]"
            }
          >
            Load more
          </Button>
        ) : ''}
      </div>
    </div>
  );
}

export default Product;
