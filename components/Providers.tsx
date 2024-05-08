'use client'

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureAppStore from "../redux/store/configureStore";

interface ProvidersProps {
    children: ReactNode;
}

const { store, persistor } = configureAppStore();


const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};

export default Providers;