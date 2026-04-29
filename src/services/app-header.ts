import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBurgerActive: false,
};

export const appHeaderSlice = createSlice({
  name: 'appHeaderBurger',
  initialState,
  reducers: {
    toggleBurger(state) {
      state.isBurgerActive = !state.isBurgerActive;
    },
  },
});

export const { toggleBurger } = appHeaderSlice.actions;
