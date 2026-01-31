import React, { useState, useEffect } from "react";
import Container from "./Container";
import Headings1 from "./Headings";
import { useSelector, useDispatch } from "react-redux";
import ProductCart from "./ProductCart";
import FilterSide from "./FilterSide";
import {
  accessoriesHandle,
  electronicsHandle,
  filterByCategory,
  filterPriceHandle,
  hightPriceHandle,
  homeAppelianceFurnitureHandle,
  loadingHandle,
  menFassionHandle,
  womenFassionHandle,
} from "../../redux/slice";
import Loading from "./Loading";
import { useNavigate } from "react-router";
function ProductShowPage({ showingProduct, text, category }) {
  const dispatch = useDispatch();
  /// make loading true
  useEffect(() => {
    showingProduct.length > 0 && dispatch(loadingHandle(true));
  }, [showingProduct]);

  const [electronics, setElectronics] = useState([]);
  const electronicsDataFromStore = useSelector((state) => state.electronics);
  // making all state for store data
  const [menFasssion, setMenFassion] = useState([]);
  const [womenFasssion, setWomenFassion] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [homeApplianceFurniture, setHomeApplianceFurniture] = useState([]);

  // geeting menfassion from store
  const menFasionFromStore = useSelector(
    (state) => state.fassion.menFassion.allFassion,
  );

  // geeting womenfassion from store
  const womenFassionFromStore = useSelector(
    (state) => state.fassion.womenFassion.allFassion,
  );

  // geeting accessories from store
  const accessoriesFromStore = useSelector(
    (state) => state.fassion.womenFassion.allFassion,
  );

  // geeting accessories from store
  const homeApplianceFurnitureFromStore = useSelector(
    (state) => state.homeAppelianceFurniture,
  );

  /// all product fetching in this useEffect
  useEffect(() => {
    // fatching electronic data from api
    const electronicDataFetchFunc = async () => {
      try {
        const [
          phone,
          laptops,
          menwatches,
          tablet,
          mobileAccesories,
          womenWatches,
        ] = await Promise.all([
          fetch(
            "https://dummyjson.com/products/category/smartphones?limit=10",
          ).then((res) => res.json()),

          fetch(
            "https://dummyjson.com/products/category/laptops?limit=10",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/mens-watches?limit=10",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/tablets?limit=10",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/mobile-accessories?limit=14",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/womens-watches?limit=10",
          ).then((res) => res.json()),
        ]);

        setElectronics((prev) =>
          [
            phone.products,
            laptops.products,
            menwatches.products,
            tablet.products,
            mobileAccesories.products,
            womenWatches.products,
          ].flat(),
        );
      } catch (err) {
        console.error(err);
      }
    };
    electronicsDataFromStore.length === 0 && electronicDataFetchFunc();

    // fatching men fassion data from api
    const menFassionFunc = async () => {
      try {
        const [menShirt, menShoes, menWatches] = await Promise.all([
          fetch(
            "https://dummyjson.com/products/category/mens-shirts?limit=10",
          ).then((res) => res.json()),

          fetch(
            "https://dummyjson.com/products/category/mens-shoes?limit=10",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/mens-watches?limit=10",
          ).then((res) => res.json()),
        ]);

        setMenFassion((prev) =>
          [menShirt.products, menShoes.products, menWatches.products].flat(),
        );
      } catch (err) {
        console.error(err);
      }
    };
    menFasionFromStore.length === 0 && menFassionFunc();

    // fatching women fassion data from api
    const womenFassionFunc = async () => {
      try {
        const [
          womenBags,
          womenDress,
          womenJewellery,
          womenShoes,
          womenWatches,
          tops,
        ] = await Promise.all([
          fetch(
            "https://dummyjson.com/products/category/womens-bags?limit=10",
          ).then((res) => res.json()),

          fetch(
            "https://dummyjson.com/products/category/womens-dresses?limit=10",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/womens-jewellery?limit=10",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/womens-shoes?limit=10",
          ).then((res) => res.json()),
          fetch(
            "https://dummyjson.com/products/category/womens-watches?limit=10",
          ).then((res) => res.json()),
          fetch("https://dummyjson.com/products/category/tops").then((res) =>
            res.json(),
          ),
        ]);

        setWomenFassion((prev) =>
          [
            womenDress.products,
            womenBags.products,
            womenJewellery.products,
            womenShoes.products,
            womenWatches.products,
            tops.products,
          ].flat(),
        );
      } catch (err) {
        console.error(err);
      }
    };
    womenFassionFromStore.length === 0 && womenFassionFunc();

    // fatching accessories fassion data from api
    const accessoriesFunc = async () => {
      try {
        const [accessories, skinCare, grocaries] = await Promise.all([
          fetch("https://dummyjson.com/products/category/sunglasses").then(
            (res) => res.json(),
          ),
          fetch("https://dummyjson.com/products/category/skin-care").then(
            (res) => res.json(),
          ),
          fetch("https://dummyjson.com/products/category/beauty").then((res) =>
            res.json(),
          ),
        ]);

        setAccessories(() =>
          [accessories.products, skinCare.products, grocaries.products].flat(),
        );
      } catch (err) {
        console.error(err);
      }
    };
    accessoriesFromStore.length === 0 && accessoriesFunc();

    // fatching home-Appeliance & Furniture fassion data from api
    const homeApplianceFurnitureFunc = async () => {
      try {
        const [homeDecoration, furniture] = await Promise.all([
          fetch("https://dummyjson.com/products/category/home-decoration").then(
            (res) => res.json(),
          ),
          fetch("https://dummyjson.com/products/category/furniture").then(
            (res) => res.json(),
          ),
        ]);

        setHomeApplianceFurniture(() =>
          [homeDecoration.products, furniture.products].flat(),
        );
      } catch (err) {
        console.error(err);
      }
    };
    homeApplianceFurnitureFromStore.length === 0 &&
      homeApplianceFurnitureFunc();
  }, []);

  // put electronic data in redux store
  useEffect(() => {
    electronicsDataFromStore.length === 0 &&
      dispatch(electronicsHandle(electronics));
  }, [electronics]);
  // put menFassion data in redux store
  useEffect(() => {
    menFasionFromStore.length === 0 && dispatch(menFassionHandle(menFasssion));
  }, [menFasssion]);
  // put womenFassion data in redux store
  useEffect(() => {
    womenFassionFromStore.length === 0 &&
      dispatch(womenFassionHandle(womenFasssion));
  }, [womenFasssion]);
  // put accessories data in redux store
  useEffect(() => {
    accessoriesFromStore.length === 0 &&
      dispatch(accessoriesHandle(accessories));
  }, [accessories]);
  // put home-Appliance & Furniture data in redux store
  useEffect(() => {
    accessoriesFromStore.length === 0 &&
      dispatch(homeAppelianceFurnitureHandle(homeApplianceFurniture));
  }, [homeApplianceFurniture]);

  // tracking maximam and minimum price of product;
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  useEffect(() => {
    let prevHighPrice = 0;
    showingProduct.map((item) => {
      if (item.price > prevHighPrice) {
        prevHighPrice = item.price;
      }
    });
    setMaxPrice(prevHighPrice);
  }, [showingProduct]);
  useEffect(() => {
    let prevLowPrice = maxPrice;
    showingProduct.map((item) => {
      if (item.price < prevLowPrice) {
        prevLowPrice = item.price;
      }
    });
    setMinPrice(prevLowPrice);
  }, [maxPrice]);
  useEffect(() => {
    dispatch(filterPriceHandle(minPrice));
  }, [minPrice]);
  useEffect(() => {
    dispatch(hightPriceHandle(maxPrice));
  }, [maxPrice]);

  // add filtering product by category from store
  const filterbyCategory = useSelector((state) => state.filterByCategories);
  const [afterCategoryFilter, setAfterCategoryFilter] = useState([]);

  const nevigate = useNavigate();
  useEffect(() => {
    dispatch(filterByCategory("All"));
  }, [nevigate]);
  useEffect(() => {
    setAfterCategoryFilter(showingProduct);
  }, [showingProduct]);
  useEffect(() => {
    if (filterbyCategory !== null) {
      const updateFilter = [];
      showingProduct.map((product) => {
        console.log(product.category);

        if (
          product.category === filterbyCategory.toLowerCase() ||
          (product.hasOwnProperty("brand") &&
            product.brand.toLowerCase() === filterbyCategory.toLowerCase())
        ) {
          updateFilter.push(product);
        } else {
          setAfterCategoryFilter(showingProduct);
        }
      });
      updateFilter.length > 0 && setAfterCategoryFilter(updateFilter);
    }
  }, [filterbyCategory]);

  // add filter by price functionality
  const filterByPrice = useSelector((state) => state.filterByPrice);

  useEffect(() => {
    const finalItem = showingProduct.filter((item) => {
      if (
        Math.floor(item.price) >=
          Math.floor(parseInt(filterByPrice.lowPrice)) &&
        Math.floor(item.price) <= Math.floor(parseInt(filterByPrice.highPrice))
      ) {
        return item;
      }
    });

    setAfterCategoryFilter(finalItem);
  }, [filterByPrice]);

  return afterCategoryFilter.length === 0 ? (
    <Loading />
  ) : (
    <Container>
      <div className="lg:flex gap-2.5 mt-2">
        <div className="w-[300px] relative lg:bg-auto bg-white z-30">
          <div id="filterSide" className="w-[300px] lg:block hidden fixed">
            <FilterSide
              categories={category || []}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
        </div>
        <div className="w-full lg:w-[75%] xl:w-[80%] 2xl:w-[82%]">
          <div className="flex items-center gap-2">
            <Headings1>{text}</Headings1>
            <p className="md:text-[13px] text-[12px]  lg:hidden block font-alan font-medium text-white px-3 left-36 py-1.5 rounded bg-[#FF6C00] uppercase">
              Filter
            </p>
          </div>

          <div className="flex items-center flex-wrap w-full">
            {afterCategoryFilter.length > 0 &&
              afterCategoryFilter.map(
                (
                  { id, price, images, title, rating, discountPercentage },
                  idx,
                ) => {
                  return (
                    <div
                      key={idx}
                      className="sm2:w-[33.33%] sm1:w-[25%] w-[50%] lg:w-[25%] 2xl:w-[16.66%] xl:w-[20%]"
                    >
                      <ProductCart
                        itemId={id}
                        item={afterCategoryFilter[idx]}
                        className={""}
                        price={price}
                        rating={
                          <div className="flex py-0.5 items-center justify-between gap-1.5 font-medium">
                            <div className="flex items-center gap-0.5">
                              {Array(Math.round(rating))
                                .fill(null)
                                .map(
                                  (item) =>
                                    item === null && (
                                      <div className="w-3">
                                        <img src="/icons/star.png" alt="" />
                                      </div>
                                    ),
                                )}
                            </div>
                            <p className="text-gray-500 text-[13px]">
                              <span className="text-gray-500 text-[13px]">
                                Rating
                              </span>
                              : {rating}
                            </p>
                          </div>
                        }
                        img={images[0]}
                        title={title}
                        discountParcent={discountPercentage}
                        discount={
                          <p className="text-[11px] md:text-[12px] text-gray-300 font-alan bg-[#cc0c39] px-1 md:px-1.5 py-0.5 font-medium md:py-1 rounded-lg">
                            {discountPercentage}%
                          </p>
                        }
                      />
                    </div>
                  );
                },
              )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductShowPage;
