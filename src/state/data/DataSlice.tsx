import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosInstance';
export type ArrayComment = {
  id: string,
  content: string,
  author: {
    id: string,
    fullName: string,
  },
  createDate: string,
  numberOfLikes: string,
  isLiked: string
}
export type ObjectNews = {
  id: string,
  title: string,
  content: string,
  comments: ArrayComment[],
  author: {
    id: string,
    fullName: string,
  },
  numberOfLikes: number,
  isLiked:boolean,
  createDate: string,
  type: string,
};
export interface DataState {
  isFetchingData: boolean;
  data: ObjectNews[],
}

const initialState: DataState = {
  isFetchingData: false,
  data: [{
    id: '',
    title: '',
    content: '',
    comments: [{
      id: '',
      content: '',
      author: {
        id: '',
        fullName: '',
      },
      createDate: '',
      numberOfLikes: '',
      isLiked: ''
    }],
    author: {
      id: '',
      fullName: '',
    },
    numberOfLikes: 0,
    isLiked: false,
    createDate: '',
    type: '',
  }],
};

export const getData = createAsyncThunk('/Messages?page=0', async () => {
  const data = await axiosInstance.get('/Messages?page=0')
  return data.data;
});

export const newsDataSlice = createSlice({
  name: 'getData',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isFetchingData = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isFetchingData = false;
      const newArray: any[] = [];
      Object.keys(action.payload).forEach((item) => {
        action.payload[item].forEach((item: ObjectNews) => {
          const newItem = {
            id: item.id,
            title: item.title,
            content: item.content,
            comments: item.comments.map((comment: ArrayComment) => {
             return ({
                id: comment.id,
                content: comment.content,
                author: {
                  id: comment.author.id,
                  fullName: comment.author.fullName,
                },
                createDate: comment.createDate,
                numberOfLikes: comment.numberOfLikes,
                isLiked: comment.isLiked
              })
            }),
            author: {
                id: item.author.id,
                fullName: item.author.fullName,
            },
            numberOfLikes: item.numberOfLikes,
            isLiked: item.isLiked,
            createDate: item.createDate,
            type: item.type,
          };
          newArray.push(newItem);
        });
       });
      state.data = newArray;
    });
    builder.addCase(getData.rejected, (state) => {
      state.isFetchingData = false;
    });
  },
});

export default newsDataSlice.reducer;

