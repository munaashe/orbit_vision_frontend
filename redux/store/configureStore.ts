
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'esdhec',
    storage,
    whitelist: ['modal'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureAppStore() {


    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            })
    });

    const persistor = persistStore(store);

    return { store, persistor };
}