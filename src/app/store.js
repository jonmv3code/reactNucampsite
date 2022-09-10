import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import { partnerReducers } from "../features/partners/partnersSlice";
import { promotionReducers } from "../features/promotions/promotionsSlice";

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnerReducers,
    promotions: promotionReducers,
  },
});
