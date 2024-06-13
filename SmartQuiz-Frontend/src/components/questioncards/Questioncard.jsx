import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setuserResponse } from '../../reduxstateslices/playQuizSlice';
import { NavLink } from 'react-router-dom';
import { setuserResult } from "../../reduxstateslices/playQuizSlice";

const Questioncard = (props) => {
  //state variables
  const [optionsCheckbox, setOptionsCheckbox] = useState(props.question.answer.map((answer, index) => ({ id: index, answer, question: props.question.question, checked: false })));//this state variable is used to store the checkbox values to track the user's responses
  const dispatch = useDispatch();
  const { userResponse } = useSelector((store) => store.playQuiz);
  const [lastQuestionSaved, setLastQuestionSaved] = useState(false);//this state is to track if the users response to the last question in the quiz is recorded. if recorded the submit quiz button will be displayed

  const handleSubmitAndShowResults = () => {
    //here we dispatch the users responses to the redux store  
    dispatch(setuserResponse({ question: props.question, response: optionsCheckbox, responseforquestionindex: props.currentQuestionIndex }));
    //this is the logic to check the users responses with the correct answers 
    dispatch(setuserResult({ correct: userResponse.map(item => {
      const answer = item.question.answer.map((ansitem, ansitemindex) => ansitem.correct === item.response[ansitemindex].checked ? true : false);
      return answer;
    }).map(item => item.filter(item => !item)).filter(item => item.length === 0).length, totalquestions: props.currentquiz.questions.length }));
  }

  const handleSaveAndNext = () => {
     //here we dispatch the users responses to the redux store 
    dispatch(setuserResponse({ question: props.question, response: optionsCheckbox, responseforquestionindex: props.currentQuestionIndex }));
   //setting the current question index to the next question
    if (props.currentQuestionIndex < props.currentquiz.questions.length - 1) {
      props.setCurrentQuestionIndex((currentQuestionIndex) => (currentQuestionIndex + 1));
      setOptionsCheckbox((prevOptions) =>
        prevOptions.map((option) =>
          option.checked ? { ...option, checked: false } : option
        )
      );
      setLastQuestionSaved(false); // Reset the flag when moving to the next question
    } else {
      setLastQuestionSaved(true); // Set the flag when the last question's response is saved
    }
  };
  //handling the users reponse of checkboxes according to mcq type. if the mcq type is single correct user can set only one checkbox as checked and if the mcq type is multiple correct user can set multiple checkboxes as checked
  const handleCheckbox = (id) => {
    if (props.quiztype === "single-correct") {
      setOptionsCheckbox((prevOptions) =>
        prevOptions.map((option) =>
          option.id !== id && option.checked
            ? { ...option, checked: false }
            : option.id === id && option.checked
              ? option
              : option.id === id
                ? { ...option, checked: !option.checked }
                : option
        )
      );
    } else if (props.quiztype === "multiple-correct") {
      setOptionsCheckbox((prevOptions) =>
        prevOptions.map((option) =>
          option.id === id ? { ...option, checked: !option.checked } : option
        )
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-10 mx-auto w-full max-w-6xl">
      <h1 className="font-bold text-center text-3xl mb-4">{props.currentquiz.quiztitle}</h1>
      <h2 className="text-xl font-semibold text-center mb-2">Question {props.currentQuestionIndex + 1}</h2>
      <h2 className="mb-4 overflow-auto">{props.question.question}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {props.question.answer.map((answer, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500 mr-2"
              onChange={() => handleCheckbox(index)}
              id={index}
              checked={optionsCheckbox[index].checked}
            />
            <span>{props.question.answer[index].option}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-6">
        
        <button
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600"
          onClick={handleSaveAndNext}
        >
          Save and Next
        </button>
      </div>
      <div className="flex flex-col items-center gap-3 mt-6">
        <span className="text-sm text-gray-600 display-block">
          {props.currentQuestionIndex + 1}/{props.currentquiz.questions.length} QUESTIONS
        </span>
        {lastQuestionSaved && (
          <NavLink to="/results">
            <button
              className=" rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              onClick={handleSubmitAndShowResults}
            >
              Submit and Show Results
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

Questioncard.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  
  quiztype: PropTypes.string.isRequired,
  setCurrentQuestionIndex: PropTypes.func.isRequired,
  currentquiz: PropTypes.object.isRequired,
};

export default Questioncard;