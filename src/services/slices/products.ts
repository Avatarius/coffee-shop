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
    }
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectPopular: (state) => state.products.filter(item => item.isPopular),
    selectCurrentProduct: (state) => state.currentProduct
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const productsReducer = productsSlice.reducer;
const {setCurrentProduct} = productsSlice.actions;
const {selectProducts, selectPopular, selectCurrentProduct} = productsSlice.selectors;

export { productsSlice, productsReducer, selectProducts, selectPopular, selectCurrentProduct, setCurrentProduct };
