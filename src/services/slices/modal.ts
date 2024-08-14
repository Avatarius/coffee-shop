import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "../../utils/types";

interface IModalState {
  isVisible: boolean;
  type: ModalType;
}

const initialState: IModalState = {
  isVisible: false,
  type: ModalType.None,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.type = action.payload;
      state.isVisible = true;
    },
    closeModal: (state) => {
      state.isVisible = false;
    },
  },
  selectors: {
    selectIsVisible: (state) => state.isVisible,
    selectModalType: (state) => state.type,
  },
});

const { openModal, closeModal } = modalSlice.actions;
const { selectIsVisible, selectModalType } = modalSlice.selectors;

export { modalSlice, openModal, closeModal, selectModalType, selectIsVisible };
