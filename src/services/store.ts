import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { appHeaderSlice } from './app-header';
import { communitySlice } from './community';
import { modalSlice } from './modal';

const rootReducer = combineSlices(appHeaderSlice, communitySlice, modalSlice);

export const store = configureStore({
  reducer: { root: rootReducer },
});
