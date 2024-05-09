'use client'

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureAppStore from "../redux/store/configureStore";
import { QueryClient, QueryClientProvider } from 'react-query';

interface ProvidersProps {
    children: ReactNode;
}

const { store, persistor } = configureAppStore();


const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const queryClient = new QueryClient();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
};

export default Providers;