import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCollection } from "../../utils/api";
import { IProduct } from "../../utils/types";

const fetchProducts = createAsyncThunk('products/fetch', async () => getCollection<IProduct>('products'));


export {fetchProducts};
