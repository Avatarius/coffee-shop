import { createSlice } from "@reduxjs/toolkit";
import { IBasketItem } from "../../utils/types";
import { calculateTotalPrice } from "../../utils/utils";

interface IBasketInitialState {
  productList: IBasketItem[];
  totalSum: number;
}

const initialState: IBasketInitialState = {
  productList: [],
  totalSum: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const basketItem = { ...action.payload, count: 1 };
      state.productList.push(basketItem);
    },
    removeFromBasket: (state, action) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload
      );
    },
    clearBasket: (state) => {
      state.productList = [];
      state.totalSum = 0;
    },
    setBasketItemVolume: (state, action) => {
      const { id, volume } = action.payload;
      const product = state.productList.find((item) => item.id === id);
      if (!product) {
        return;
      }
      product.volume = volume;
    },
    setBasketItemCount: (state, action) => {
      const { id, count } = action.payload;
      const product = state.productList.find((item) => item.id === id);
      if (!product) {
        return;
      }
      product.count = count;
    },
    setTotalPrice: (state, action) => {
      const id = action.payload;
      const product = state.productList.find((item) => item.id === id);
      if (!product) {
        return;
      }
      product.totalPrice =
        calculateTotalPrice(
          product.price,
          product.volumeRange[0],
          product.volume
        ) * product.count;
    },
    setTotalSum: (state) => {
      state.totalSum = state.productList.reduce((acc, item) => {
        return acc + item.totalPrice;
      }, 0);
    },
  },
  selectors: {
    selectProductList: (state) => state.productList,
    selectTotalSum: (state) => state.totalSum,
    selectProductListLength: (state) => state.productList.length,
  },
});

const {
  addToBasket,
  removeFromBasket,
  clearBasket,
  setBasketItemCount,
  setBasketItemVolume,
  setTotalPrice,
  setTotalSum,
} = basketSlice.actions;
const { selectProductList, selectTotalSum, selectProductListLength } =
  basketSlice.selectors;

export {
  basketSlice,
  addToBasket,
  removeFromBasket,
  clearBasket,
  setBasketItemCount,
  setBasketItemVolume,
  setTotalPrice,
  setTotalSum,
  selectProductList,
  selectTotalSum,
  selectProductListLength,
};
