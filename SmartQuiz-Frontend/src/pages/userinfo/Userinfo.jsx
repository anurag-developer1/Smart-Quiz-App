import { useSelector, useDispatch } from "react-redux";
import { setusername } from "../../reduxstateslices/playQuizSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//this component saves the name of the player before starting the quiz. the players name must be 5 to 50 characters
function Userinfo() {
  const navigate=useNavigate();
  const { currentquiz } = useSelector((store) => store.playQuiz);
  const currentquiztitle = currentquiz.quiztitle;
  const currentquizdescription = currentquiz.quizdescription;
  const [playerName, setPlayerName] = useState("");
  const dispatch = useDispatch();
  const handlePlayQuiz=()=>{
    if((playerName.length>=5&&playerName.length<=50)){dispatch(setusername(playerName)); navigate('/displayquestions')} 
    else return
  }

  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">{currentquiztitle}</h1>
        <p className="text-gray-600 mb-6 text-center">{currentquizdescription}</p>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Enter your name:
          </label>
          <input
            onChange={(e) => setPlayerName(e.target.value)}
            type="text"
            id="username"
            placeholder="Enter your name (5 to 50 characters) "
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        
          <button className={`${
                  playerName.length>=5&&playerName.length<=50?"bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    
                } font-bold py-2 px-4 mt-4 rounded transition-colors duration-200 w-full`}
                onClick={handlePlayQuiz}>
            Play Quiz
          </button>
        
      </div>
    </div>
  );
}

export default Userinfo;