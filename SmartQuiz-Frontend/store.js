//redux store

import { configureStore } from '@reduxjs/toolkit';
import createQuizSlice from './src/reduxstateslices/createQuizSlice';
import playQuizSlice from './src/reduxstateslices/playQuizSlice';

const store = configureStore({
  reducer: {
    createQuiz: createQuizSlice.reducer,
    playQuiz: playQuizSlice.reducer,
  },
});

export default store;