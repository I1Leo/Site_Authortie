import {  combineSlices, configureStore } from "@reduxjs/toolkit";
import { appHeaderSlice } from "./app-header";
import { communitySlice } from "./community";

const rootReducer = combineSlices(
   appHeaderSlice,
   communitySlice
)

export const store = configureStore({
   reducer: {root: rootReducer}
})