import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices';

const store = configureStore({
    reducer: {
        counter: counterReducer,  // You can add more reducers here if needed
    },
});

export default store;
