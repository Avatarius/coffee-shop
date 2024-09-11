import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/products";
import { reviewsSlice } from "./slices/reviews";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { modalSlice } from "./slices/modal";
import { basketSlice } from "./slices/basket";

const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
