import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";
import { fetchProducts } from "../thunk/products";

interface IProductsState {
  products: IProduct[];
}

const initialState: IProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  selectors: {
    selectProducts: (state) => state.products,
    selectPopular: (state) => state.products.filter(item => item.isPopular)
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const productsReducer = productsSlice.reducer;
const {selectProducts, selectPopular} = productsSlice.selectors;

export { productsSlice, productsReducer, selectProducts, selectPopular };
