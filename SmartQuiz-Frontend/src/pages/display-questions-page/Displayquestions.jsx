import {  useSelector } from "react-redux";
import { useState } from "react";
import Questioncard from "../../components/questioncards/Questioncard";


function Displayquestions() {
  
   
  const { currentquiz } = useSelector((store) => store.playQuiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  

  return (
    <div className="flex min-h-screen flex-col items-center  py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Questions</h1>
      <div className="mx-auto w-full max-w-3xl p-2">
        <Questioncard
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          currentquiz={currentquiz}
          currentQuestionIndex={currentQuestionIndex}
          question={currentquiz.questions[currentQuestionIndex]}
          
          quiztype={currentquiz.quiztype}
        />
        
      </div>
    </div>
  );
}

export default Displayquestions;
