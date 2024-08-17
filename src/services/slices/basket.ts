import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";


interface IBasketInitialState {
  productList: IProduct[];
  totalSum: number;
}

const initialState: IBasketInitialState = {
  productList: [],
  totalSum: 0
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.productList.push(action.payload);
      state.totalSum += action.payload.cost;
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload);

      state.productList = state.productList.filter(product => product.id !== action.payload);
    }
  },
  selectors: {
    selectProductList: (state) => state.productList,
    selectTotalSum: (state) => state.totalSum,
    selectProductListLength: (state) => state.productList.length
  }
});

const {addToBasket, removeFromBasket} = basketSlice.actions;
const {selectProductList, selectTotalSum, selectProductListLength} = basketSlice.selectors;


export {basketSlice, addToBasket, removeFromBasket, selectProductList, selectTotalSum, selectProductListLength};
