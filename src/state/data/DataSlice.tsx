import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosInstance';

export interface UserState {
  data: {
  };
  error: any;
}

const initialState: UserState = {
  data: {},
  erorr: {},
};

export const getData = createAsyncThunk('/Messages?page=0', async () => {
  await axiosInstance
    .get('/Messages?page=0')
    .then((res) => {

      console.log(res);

    });
});

export const dataSlice = createSlice({
  name: 'getData',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.data = true;
    });
    builder.addCase(getData.fulfilled, (state) => {
      state.data = false;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default dataSlice.reducer;

