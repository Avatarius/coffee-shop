import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../utils/types";

interface IOrderInitialState {
  order: IOrder | null;
}

const initialState: IOrderInitialState = {
  order: null
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {

  }
});
