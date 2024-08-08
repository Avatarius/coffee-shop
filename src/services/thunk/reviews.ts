import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCollection } from "../../utils/api";
import { IReview } from "../../utils/types";

const fetchReviews = createAsyncThunk("reviews/fetch", () =>
  getCollection<IReview>("reviews")
);

export { fetchReviews };
