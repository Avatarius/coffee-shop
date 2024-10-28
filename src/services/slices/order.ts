import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../utils/types";
import { postOrder } from "../thunk/order";

interface IOrderInitialState {
  order: IOrder | null;
}

const initialState: IOrderInitialState = {
  order: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postOrder.fulfilled, (state, action) => {
      console.log('order posted');
    })
  }
});


export { orderSlice };
