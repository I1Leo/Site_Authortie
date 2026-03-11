import { createSlice } from "@reduxjs/toolkit"
import { communityData } from "../data/community";

const data = communityData;

const initialState = {
   itemsPerPage: 6,
   isSeeAll: false,
}

export const communitySlice = createSlice({
   name: "communitySlice",
   initialState,
   reducers: {
      seeAll(state) {
         state.itemsPerPage = data.length;
         state.isSeeAll = true;
      },
      close(state) {
         state.itemsPerPage = 6;
         state.isSeeAll = false
      }
   }
})

export const {seeAll, close } = communitySlice.actions;