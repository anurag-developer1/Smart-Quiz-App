//this stores the state of the current quiz being played
import { createSlice } from '@reduxjs/toolkit';

const initialplayQuizState = {
  playquizindex:0,
  currentquiz:{},
  username:"",
  userResponse:[],
  userResult:null
 
};

const playQuizSlice = createSlice({
    name: 'playQuiz',
    initialState: initialplayQuizState,
    reducers: {
      setplayquizindex(state, action) {
        state.playquizindex = action.payload;
      },
      setusername(state, action) {
        state.username = action.payload;
      },
      setcurrentquiz(state,action){
        state.currentquiz = action.payload;
      },
      setuserResponse(state, action){
         state.userResponse[action.payload.responseforquestionindex] = action.payload;
      },
      setuserResult(state,action){
        state.userResult = action.payload
      },
      resetPlayQuizState(){return initialplayQuizState;}//reset the playquiz state
    },
});
export const { setplayquizindex, setusername,setcurrentquiz,setuserResponse,setuserResult,resetPlayQuizState} = playQuizSlice.actions;
export default playQuizSlice;