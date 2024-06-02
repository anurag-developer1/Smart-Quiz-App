import { configureStore } from '@reduxjs/toolkit';
import createQuizSlice from './src/features/createQuizSlice';

const store = configureStore({
  reducer: {
    createQuiz: createQuizSlice.reducer,
  },
});

export default store;