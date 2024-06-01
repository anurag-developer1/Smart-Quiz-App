/*import MultipleCorrect from "../../components/add-multiplecorrect/Multiplecorrect";
import ShortAnswer from "../../components/add-shortanswer/Shortanswer";
import SingleCorrect from "../../components/add-singlecorrect/Singlecorrect";
import { useState} from "react";
import Modal from "../../components/modal/Modal";

function Createquizform() {
  const [showModal, setShowModal] = useState(true); // Initialize showModal to true on the first render
  const [mcqType, setMcqType] = useState("");
  
  const handleShowModal = (e) => {
    setShowModal(false)
    if (e.target.id === 'btn-mcq-single') {
      setMcqType("single");
    } else if (e.target.id === 'btn-mcq-multiple') {
      setMcqType("multiple");
    } else {
      setMcqType("shortanswer");
    }
  };

  return (
    showModal ? <Modal handleShowModal={handleShowModal} /> :
    <div className="form-container flex flex-col items-center">
      <div className="px-4 py-8 mt-3 w-2/3 bg-slate-400">
        <h1 className="text-xl font-bold text-center">Create New Quiz</h1><br />
        <input className="w-full" type="text" placeholder="Quiz name" />
        <br /><br />
        <textarea className="w-full" type="text" placeholder="Quiz description" />
        <br />
        <br />
        {mcqType === "single" ? <SingleCorrect /> : mcqType === "multiple" ? <MultipleCorrect /> : <ShortAnswer />}
        <button>Save Quiz</button>
        
      </div>
    </div>
  );
}

export default Createquizform;*/

import MultipleCorrect from "../../components/add-multiplecorrect/Multiplecorrect";

import SingleCorrect from "../../components/add-singlecorrect/Singlecorrect";
import { useState } from "react";
import Modal from "../../components/modal/Modal";

function Createquizform() {
  const [showModal, setShowModal] = useState(true); // Initialize showModal to true on the first render
  const [mcqType, setMcqType] = useState("");
  const [quizTitle,setQuizTitle]=useState("");
  const [quizDescription,setQuizDescription]=useState("")

  const handleShowModal = (e) => {
    setShowModal(false);
    if (e.target.id === "btn-mcq-single") {
      setMcqType("single");
    } else {setMcqType("multiple")}
  };

  const handleSaveQuiz = () => {
    
    const QuizState = {
      quiztype:mcqType,
      
      
      
    };
    localStorage.setItem("singleCorrectState", JSON.stringify(QuizState));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="px-4 py-8 mt-3 w-full max-w-3xl bg-black/30 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Create New Quiz
        </h1>
        <input
          className={`w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${quizTitle.length>=10&&quizTitle.length<=30?"focus:ring-green-700":"focus:ring-red-900"} `}
          type="text"
          placeholder="Quiz name"
          onChange={(e) => { setQuizTitle(e.target.value)}}
        />
        <textarea
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Quiz description"
          onChange={(e) => { setQuizDescription(e.target.value)}}
        />
        {mcqType === "single" ? <SingleCorrect /> : <MultipleCorrect />}
        <button  onClick={handleSaveQuiz} className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Save Quiz
        </button>
        {showModal&&<Modal  handleShowModal={handleShowModal} />}
      </div>
    </div>
    )
    ;
  
}

export default Createquizform;


