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
import { useState,useEffect } from "react";
import Modal from "../../components/modal/Modal";
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from "react-redux";
import{setquiztype, setquizdescription, setquiztitle,setdatecreated} from '../../reduxstateslices/createQuizSlice'


function Createquizform() {
  const [showModal, setShowModal] = useState(true); // Initialize showModal to true on the first render
  const [mcqType, setMcqType] = useState("");
  const [quizTitle,setQuizTitle]=useState("");
  const [quizDescription,setQuizDescription]=useState("")
  const [showSuccessModal,setShowSuccessModal]=useState(false)
  const [showSaveQuizErrorModal,setShowSaveQuizErrorModal]=useState(false)
  const dispatch=useDispatch()
  const {quiztype,questions,isactive}=useSelector((store)=>store.createQuiz)
  useEffect(() => {
    dispatch(setquiztype(mcqType));
  }, [mcqType, dispatch]);

  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 1000); // hide modal after 3 seconds
    }
  }, [showSuccessModal]);
  useEffect(() => {
    if (showSaveQuizErrorModal) {
      setTimeout(() => {
        setShowSaveQuizErrorModal(false);
      }, 3000); // hide modal after 3 seconds
    }
  }, [showSaveQuizErrorModal]);

  const SuccessModal=()=>{return(<div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="fixed inset-0 bg-black opacity-50"></div>
  <div className="bg-white rounded-lg p-8 max-w-md mx-auto relative">
    <div className="flex justify-center mb-4">
      <span ><DoneIcon sx={{ color: "green" }}/></span>
    </div>
    <h2 className="text-2xl font-bold mb-4 text-center">Success!</h2>
    <p className="text-gray-600">Quiz Saved successfully!</p>
  </div>
</div>)}

const SaveQuizErrorModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10">
        <h2 className="text-xl font-bold mb-4 text-red-700">Error</h2>
        <p className="text-gray-700">Please Ensure That your Quiz Has Atleast One Question and You Are Not Saving The Last Quiz Twice</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6"
          onClick={() => setShowSaveQuizErrorModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

  const handleShowModal = (e) => {
    setShowModal(false);
    if (e.target.id === "btn-mcq-single") {
      setMcqType("single-correct");
      
    } else {setMcqType("multiple-correct");dispatch(setquiztype(mcqType))}
  };
  
  const handleSaveQuiz = () => {
   if(questions.length===0){setShowSaveQuizErrorModal(true); return}
   else{ const newQuiz = { quiztype, quiztitle: quizTitle, quizdescription: quizDescription, questions, isactive,datecreated:new Date().toLocaleString() };
    dispatch(setquiztitle(newQuiz.quiztitle))
    dispatch(setquizdescription(newQuiz.quizdescription))
    dispatch(setdatecreated(newQuiz.datecreated))
    const existingData = localStorage.getItem("Quiz");
    let Quiz = existingData ? JSON.parse(existingData) : [];
    // Append new data to the existing array
    if(Quiz.length && newQuiz.quiztitle===Quiz[Quiz.length-1].quiztitle&&newQuiz.quizdescription===Quiz[Quiz.length-1].quizdescription &&newQuiz.questions.length===Quiz[Quiz.length-1].questions.length){setShowSaveQuizErrorModal(true);return}else{Quiz.push(newQuiz)
      localStorage.setItem("Quiz", JSON.stringify(Quiz));
      setShowSuccessModal(true)}}
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="px-4 py-8 mt-3 w-full max-w-3xl bg-black/30 rounded-lg shadow-md">
       {showModal&&<Modal  handleShowModal={handleShowModal} />}
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Create New Quiz
        </h1>
        <input
  className={`w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 ${
    quizTitle.length >= 10 && quizTitle.length <= 30
      ? 'border-green-500 text-green-700 focus:ring-green-500'
      : 'border-red-500 text-red-700 focus:ring-red-500'
  }`}
  type="text"
  placeholder="Quiz title (must be 10 to 30 characters)"
  value={quizTitle}
  onChange={(e) => setQuizTitle(e.target.value)}
/>
        <textarea
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Quiz description"
          onChange={(e) => { setQuizDescription(e.target.value)}}
        />
        {mcqType === "single-correct" ? <SingleCorrect quizTitle={quizTitle} /> :mcqType === "multiple-correct" ? <MultipleCorrect quizTitle={quizTitle}/>:null}
        <button  onClick={handleSaveQuiz} className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Save Quiz
        </button>
        
      </div>
      {showSuccessModal&&<SuccessModal  />}
      {showSaveQuizErrorModal&&<SaveQuizErrorModal />}
    </div>
    )
    ;
  
}

export default Createquizform;


