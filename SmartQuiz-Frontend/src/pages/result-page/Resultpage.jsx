import { useDispatch, useSelector } from "react-redux";
import congratulations from "./congratulations.jpg"
import { NavLink } from "react-router-dom";
import { resetPlayQuizState } from "../../reduxstateslices/playQuizSlice";


function ResultPage() {
    const {username,userResult}=useSelector((store)=>store.playQuiz)
    const dispatch=useDispatch();
    const handleOk=()=>{dispatch(resetPlayQuizState())}
  return (

    <div className="flex flex-col items-center justify-center min-h-screen p-3">
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <img
          src={congratulations}
          alt="Quiz Completion"
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-center mb-4">Congratulations {username}!</h1>
        <p className="text-gray-600 text-center mb-6">
          You have completed the quiz! View your results below.
        </p>
        <div className="bg-green-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold text-green-700 mb-2 text-center">Your Score:</h2>
          <p className="text-lg text-green-700 text-center">{userResult.correct}/{userResult.totalquestions}</p>
        </div>
        <div className="flex justify-center">
          <NavLink to="/home"><button onClick={handleOk} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
           OK
          </button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;