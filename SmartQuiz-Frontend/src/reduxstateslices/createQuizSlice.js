// createQuizSlice.js. this stores the state of the current quiz being created by create quiz form
import { createSlice } from '@reduxjs/toolkit';

const initialQuizState = {
  quiztype: "",
  quiztitle: "",
  quizdescription: "",
  questions:[],
  isactive: true,
  datecreated :""
};

const createQuizSlice = createSlice({
  name: 'createQuiz',
  initialState: initialQuizState,
  reducers: {
    setquiztitle(state, action) {
      state.quiztitle = action.payload;
    },
    setquizdescription(state, action) {
      state.quizdescription = action.payload;
    },
    setquiztype(state, action) {
      state.quiztype = action.payload;
    },
    setquestions(state, action) {
      state.questions = [...state.questions, action.payload];
    },
    setisactive(state, action) {
      state.isactive = action.payload;
    },
    setdatecreated(state, action){
      state.datecreated = action.payload;
    },
    resetCreateQuizState(){return initialQuizState;} //this resets the state of the create quiz form
  },
});
export const { setquiztitle, setquizdescription, setquiztype, setquestions, setisactive ,setdatecreated,resetCreateQuizState} = createQuizSlice.actions;
export default createQuizSlice;