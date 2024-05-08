import { combineReducers } from "@reduxjs/toolkit";

import modalReducer from '../actions/modal';


const rootReducer = combineReducers({
    modal: modalReducer,
})

export default rootReducer;