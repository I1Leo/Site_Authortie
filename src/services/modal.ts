import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isModal: false,
  currentState: "Вход"
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModal = !state.isModal;
    },
    setCurrentState(state, action) {
      state.currentState = action.payload;
    }
  },
});

export const { toggleModal, setCurrentState } = modalSlice.actions;
