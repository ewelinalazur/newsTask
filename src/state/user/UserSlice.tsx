import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../helpers/axiosInstance';

export interface UserState {
  loading: boolean;
  isLoggedIn: boolean;
  error: [];
  data: {
    username: string;
    password: string;
  };
}

const initialState: UserState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  data: {
    username: '',
    password: '',
  },
};

export const loginUser = createAsyncThunk('/Auth', async ({username, password}: {username: string; password: string}) => {
  await axiosInstance
    .post('/Auth', {
      username: username,
      password: password,
    })
    .then((res) => {
      AsyncStorage.setItem('token', res.data.token);
      console.log(res);
    });
});

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: initialState,
  reducers: {
    setSignedOutStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isLoggedIn = false;
    });
  },
});

export default userLoginSlice.reducer;

