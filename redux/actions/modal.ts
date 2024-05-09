import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    modal: string;
}

const initialState: ModalState = {
    modal: ''
};

const modalReducer = createSlice({
    name: "modal",
    initialState,
    reducers: {
        updateModal(state, action: PayloadAction<any>) {
            state.modal = action.payload;
        },
    }
});

export const { updateModal } = modalReducer.actions;

export default modalReducer.reducer;