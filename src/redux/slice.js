import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  loading: false,
  slider: {
    sliderNum: 0,
    sliderTranslate: 0,
  },
  dealsProduct: [],
  getProductForDealsSlider: [],
  dealsProductSlider: {
    sliderNum: 0,
    sliderTranslate: 0,
  },
  getProductForSlider: [],
  newProductSlider: {
    sliderNum: 0,
    sliderTranslate: 0,
  },
  mostSellingProduct: [],
  mostReviewProduct: [],
  switchToSellAndReview: "Most Selling",
  //store electronics product
  electronics: [],
  // filtering product using price filter
  filterByPrice: {
    lowPrice: 0,
    highPrice: 0,
  },
  // adding sub category items
  subCategory: {},
  //complete fetching
  completeFetch: false,
  // adding fassion category
  fassion: {
    menFassion: {
      allFassion: [],
      shoes: [],
      watches: [],
    },
    womenFassion: {
      allFassion: [],
      bags: [],
      dresse: [],
    },
    accessories: [],
  },
};

export const productSlicer = createSlice({
  name: "zynexa mart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    //store home slider items
    nextSlider: (state, action) => {
      if (state.slider.sliderNum < 4) {
        state.slider.sliderNum = state.slider.sliderNum + 1;
        state.slider.sliderTranslate = state.slider.sliderTranslate + 100;
      } else if (state.slider.sliderNum === 4) {
        state.slider.sliderNum = 0;
        state.slider.sliderTranslate = 0;
      }
    },
    // make loader
    loadingHandle: (state, action) => {
      state.loading = action.payload;
    },
    prevSlider: (state, action) => {
      if (state.slider.sliderNum > 0) {
        state.slider.sliderNum = state.slider.sliderNum - 1;
        state.slider.sliderTranslate = state.slider.sliderTranslate - 100;
      } else if (state.slider.sliderNum === 0) {
        state.slider.sliderNum = 4;
        state.slider.sliderTranslate = 4 * 100;
      }
    },
    autoSlide: (state, action) => {
      if (state.slider.sliderNum < 5) {
        state.slider.sliderNum = state.slider.sliderNum + 1;
        state.slider.sliderTranslate = state.slider.sliderTranslate + 100;
      }
      if (state.slider.sliderNum === 4) {
        state.slider.sliderNum = state.slider.sliderNum - 1;
        state.slider.sliderTranslate = state.slider.sliderTranslate - 100;
      }
    },
    slideWithClick: (state, action) => {
      state.slider.sliderNum = action.payload;
      state.slider.sliderTranslate = action.payload * 100;
    },
    // deals product adding
    dealsHandle: (state, action) => {
      state.dealsProduct = action.payload;
      // get 10 new Product from deals product arrow},
      if (state.dealsProduct.length > 0) {
        state.dealsProduct.map((data, idx) => {
          if (idx >= 3 && idx <= 6) {
            state.getProductForSlider.push(data);
          }
          if (idx >= 15 && idx <= 17) {
            state.getProductForSlider.push(data);
          }
          if (idx >= 24 && idx <= 26) {
            state.getProductForSlider.push(data);
          }
        });
      }

      if (state.dealsProduct.length > 0) {
        state.dealsProduct.map((data, idx) => {
          if (idx >= 0 && idx <= 2) {
            state.getProductForDealsSlider.push(data);
          }
          if (idx >= 11 && idx <= 14) {
            state.getProductForDealsSlider.push(data);
          }
          if (idx >= 21 && idx <= 23) {
            state.getProductForDealsSlider.push(data);
          }
        });
      }
      // get for most selling
      if (state.dealsProduct.length > 0) {
        state.dealsProduct.map((data, idx) => {
          if (idx >= 7 && idx <= 9) {
            state.mostSellingProduct.push(data);
          }
          if (idx >= 18 && idx <= 20) {
            state.mostSellingProduct.push(data);
          }
          if (idx >= 27 && idx <= 29) {
            state.mostSellingProduct.push(data);
          }
          if (idx >= 41 && idx <= 43) {
            state.mostSellingProduct.push(data);
          }
          if (idx >= 51 && idx <= 52) {
            state.mostSellingProduct.push(data);
          }
          if (idx >= 61 && idx <= 62) {
            state.mostSellingProduct.push(data);
          }
        });
      }
      // get most review product
      if (state.dealsProduct.length > 0) {
        state.dealsProduct.map((data, idx) => {
          if (idx >= 54 && idx <= 57) {
            state.mostReviewProduct.push(data);
          }
          if (idx >= 61 && idx <= 63) {
            state.mostReviewProduct.push(data);
          }
          if (idx >= 71 && idx <= 73) {
            state.mostReviewProduct.push(data);
          }
          if (idx >= 81 && idx <= 83) {
            state.mostReviewProduct.push(data);
          }
          if (idx >= 91 && idx <= 93) {
            state.mostReviewProduct.push(data);
          }
        });
      }
    },
    // make slider for deals
    nextDeals: (state, action) => {
      if (state.dealsProductSlider.sliderNum < action.payload) {
        state.dealsProductSlider.sliderNum =
          state.dealsProductSlider.sliderNum + 1;
        state.dealsProductSlider.sliderTranslate =
          state.dealsProductSlider.sliderTranslate + 100;
      } else if (state.dealsProductSlider.sliderNum === action.payload) {
        state.dealsProductSlider.sliderNum = 0;
        state.dealsProductSlider.sliderTranslate = 0;
      }
    },
    prevDeals: (state, action) => {
      if (state.dealsProductSlider.sliderNum > 0) {
        state.dealsProductSlider.sliderNum =
          state.dealsProductSlider.sliderNum - 1;
        state.dealsProductSlider.sliderTranslate =
          state.dealsProductSlider.sliderTranslate - 100;
      } else if (state.dealsProductSlider.sliderNum === 0) {
        state.dealsProductSlider.sliderNum = action.payload;
        state.dealsProductSlider.sliderTranslate = action.payload * 100;
      }
    },
    // make slidre for new  product section
    nextNewProduct: (state, action) => {
      if (state.newProductSlider.sliderNum < action.payload) {
        state.newProductSlider.sliderNum = state.newProductSlider.sliderNum + 1;
        state.newProductSlider.sliderTranslate =
          state.newProductSlider.sliderTranslate + 100;
      } else if (state.newProductSlider.sliderNum === action.payload) {
        state.newProductSlider.sliderNum = 0;
        state.newProductSlider.sliderTranslate = 0;
      }
    },
    prevNewProduct: (state, action) => {
      if (state.newProductSlider.sliderNum > 0) {
        state.newProductSlider.sliderNum = state.newProductSlider.sliderNum - 1;
        state.newProductSlider.sliderTranslate =
          state.newProductSlider.sliderTranslate - 100;
      } else if (state.newProductSlider.sliderNum === 0) {
        state.newProductSlider.sliderNum = action.payload;
        state.newProductSlider.sliderTranslate = action.payload * 100;
      }
    },
    switchToSellAndReviewHandle: (state, action) => {
      state.switchToSellAndReview = action.payload;
    },
    // make handle for electronics product
    electronicsHandle: (state, action) => {
      state.electronics = action.payload;
    },
    // make a filtering handle
    filterPriceHandle: (state, action) => {
      state.filterByPrice.lowPrice = action.payload;
    },
    hightPriceHandle: (state, action) => {
      state.filterByPrice.highPrice = action.payload;
    },
    // if fetching is complete
    fetchCompletingHandle: (state, action)=> {
      state.completeFetch = !state.completeFetch
    },

    menFassionHandle: (state, action) => {
      state.fassion.menFassion.allFassion = action.payload
    },
    womenFassionHandle: (state, action) => {
      state.fassion.womenFassion.allFassion = action.payload
    },
    accessoriesHandle: (state, action) => {
      state.fassion.accessories = action.payload
    },

  },
});

export const {
  addToCart,
  removeFromCart,
  nextSlider,
  prevSlider,
  slideWithClick,
  autoSlide,
  dealsHandle,
  nextDeals,
  prevDeals,
  dealsSlideWithClick,
  nextNewProduct,
  prevNewProduct,
  switchToSellAndReviewHandle,
  electronicsHandle,
  filterPriceHandle,
  hightPriceHandle,
  loadingHandle,
  menFassionHandle,
  womenFassionHandle,
  accessoriesHandle
} = productSlicer.actions;
export default productSlicer.reducer;
