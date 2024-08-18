import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";
import { fetchProducts } from "../thunk/products";

interface IProductsState {
  products: IProduct[];
  currentProduct: IProduct | null;
}

const initialState: IProductsState = {
  products: [],
  currentProduct: null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setVolume: (state, action) => {
      if (state.currentProduct) {
        state.currentProduct.volume = action.payload;
      }
    }
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectPopular: (state) => state.products.filter(item => item.isPopular),
    selectCurrentProduct: (state) => state.currentProduct,
    selectCurrentVolume: (state) => state.currentProduct?.volume
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const productsReducer = productsSlice.reducer;
const {setCurrentProduct, setVolume} = productsSlice.actions;
const {selectProducts, selectPopular, selectCurrentProduct, selectCurrentVolume} = productsSlice.selectors;

export { productsSlice, productsReducer, selectProducts, selectPopular, selectCurrentProduct, selectCurrentVolume, setCurrentProduct, setVolume };
