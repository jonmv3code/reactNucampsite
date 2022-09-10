import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
