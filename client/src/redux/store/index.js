import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/user_slice';
import matchesReducer from '../slices/matches_slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        matches: matchesReducer,
    },
});

export default store;
