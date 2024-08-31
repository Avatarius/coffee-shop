import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDocument } from "../../utils/api";
import { IOrder } from "../../utils/types";



const postOrder = createAsyncThunk('order/post', async (order: IOrder) => addDocument(order));


export {postOrder};
