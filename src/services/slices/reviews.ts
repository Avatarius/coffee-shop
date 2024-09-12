import { createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../utils/types";
import { fetchReviews } from "../thunk/reviews";

interface IReviewsState {
  reviews: IReview[];
  currentReview: IReview | null;
}

const initialState: IReviewsState = {
  reviews: [],
  currentReview: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviews: (state) => state.reviews,
    selectCurrentReview: (state) => state.currentReview,
  },
  reducers: {
    setCurrentReview: (state, action) => {
      state.currentReview = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload.map((review) => ({
        ...review,
        image: review.image ? review.image : "",
      }));
    });
  },
});

const reviewReducer = reviewsSlice.reducer;
const { setCurrentReview } = reviewsSlice.actions;
const { selectReviews, selectCurrentReview } = reviewsSlice.selectors;

export {
  reviewsSlice,
  reviewReducer,
  setCurrentReview,
  selectReviews,
  selectCurrentReview,
};
