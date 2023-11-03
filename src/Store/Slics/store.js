import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieListReducer from './movieListSlice';

const store = configureStore(
    {
        reducer: {
            user: userReducer,
            movies : movieListReducer,
        }
    }
)

export default store;