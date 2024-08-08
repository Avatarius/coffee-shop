import { createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../utils/types";
import { fetchReviews } from "../thunk/reviews";

interface IReviewsState {
  reviews: IReview[];
}

const initialState: IReviewsState = {
  reviews: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviews: (state) => state.reviews,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});

const reviewReducer = reviewsSlice.reducer;
const { selectReviews } = reviewsSlice.selectors;

export { reviewsSlice, reviewReducer, selectReviews };
