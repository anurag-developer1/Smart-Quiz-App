import { useSelector, useDispatch } from "react-redux";
import { setusername } from "../../reduxstateslices/playQuizSlice";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Userinfo() {
  const { currentquiz } = useSelector((store) => store.playQuiz);
  const currentquiztitle = currentquiz.quiztitle;
  const currentquizdescription = currentquiz.quizdescription;
  const [playerName, setPlayerName] = useState("");
  const dispatch = useDispatch();

  const setPlayerUsername = () => {
    dispatch(setusername(playerName));
  };

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
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <NavLink
          to="/displayquestions"
          className="block w-full text-center"
          onClick={setPlayerUsername}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Play Quiz
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Userinfo;