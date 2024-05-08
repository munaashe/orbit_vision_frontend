import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    data: any;
    modal: string;
}

const initialState: ModalState = {
    data: {},
    modal: ""
};

const modalReducer = createSlice({
    name: "modal",
    initialState,
    reducers: {
        updateModal(state, action: PayloadAction<any>) {
            state.data = action.payload;
        },
        updatePublicModal(state, action: PayloadAction<string>) {
            state.modal = action.payload;
        }
    }
});

export const { updateModal, updatePublicModal } = modalReducer.actions;

export default modalReducer.reducer;