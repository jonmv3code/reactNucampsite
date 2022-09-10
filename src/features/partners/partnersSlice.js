import { createSlice } from "@reduxjs/toolkit";
import { PARTNERS } from "../../app/shared/PARTNERS";

const initialState = {
  partnersArray: PARTNERS,
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
});

export const partnerReducers = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
  return state.partners.partnersArray.find((partner) => partner.featured);
};
