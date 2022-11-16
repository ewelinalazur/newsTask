import {userLoginSlice} from './user/UserSlice';
import {useDispatch} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import {newsDataSlice} from "./data/DataSlice";

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice.reducer,
    getData: newsDataSlice.reducer,
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

