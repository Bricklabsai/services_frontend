// 'use client' // This seems TypeScript or Next.js specific, might not be needed in plain JS. Uncomment if necessary.

"use client" 
import { store } from './store';
import { Provider } from 'react-redux';

export const StoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
}
