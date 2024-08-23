import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";
import { fetchProducts } from "../thunk/products";
import { calculateTotalPrice } from "../../utils/utils";

interface IProductsState {
  products: IProduct[];
  currentProduct: IProduct | null;
}

const initialState: IProductsState = {
  products: [],
  currentProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setCurrentProductVolume: (state, action) => {
      if (state.currentProduct) {
        state.currentProduct.volume = action.payload;
        state.currentProduct.totalPrice = calculateTotalPrice(state.currentProduct.price, state .currentProduct.volumeRange[0], action.payload);
      }
    },
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectPopular: (state) => state.products.filter((item) => item.isPopular),
    selectCurrentProduct: (state) => state.currentProduct,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.map((product) => ({
        ...product,
        totalPrice: product.price,
      }));
    });
  },
});

const productsReducer = productsSlice.reducer;
const {
  setCurrentProduct,
  setCurrentProductVolume,
} = productsSlice.actions;
const { selectProducts, selectPopular, selectCurrentProduct } =
  productsSlice.selectors;

export {
  productsSlice,
  productsReducer,
  selectProducts,
  selectPopular,
  selectCurrentProduct,
  setCurrentProduct,
  setCurrentProductVolume,
};
