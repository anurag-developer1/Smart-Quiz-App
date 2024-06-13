import MultipleCorrect from "../../components/add-multiplecorrect/Multiplecorrect";
import SingleCorrect from "../../components/add-singlecorrect/Singlecorrect";
import { useState, useEffect } from "react";
import Modal from "../../components/modal/Modal";
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from "react-redux";
import { setquiztype, setquizdescription, setquiztitle, setdatecreated,resetCreateQuizState } from '../../reduxstateslices/createQuizSlice'

// Createquizform component
function Createquizform() {
 // State variables
 const [showModal, setShowModal] = useState(true); // Initialize showModal to true on the first render
 const [mcqType, setMcqType] = useState(""); // MCQ type (single-correct or multiple-correct)
 const [quizTitle, setQuizTitle] = useState(""); // Quiz title
 const [quizDescription, setQuizDescription] = useState("") // Quiz description
 const [showSuccessModal, setShowSuccessModal] = useState(false) // Show success modal
 const [showSaveQuizErrorModal, setShowSaveQuizErrorModal] = useState(false) // Show error modal

 // Redux dispatch and selector
 const dispatch = useDispatch()
 const { quiztype, questions, isactive } = useSelector((store) => store.createQuiz)

 // Update quiztype in Redux store whenever mcqType changes
 useEffect(() => {
   dispatch(setquiztype(mcqType));
 }, [mcqType, dispatch]);

 // Hide success modal after 1 second
 useEffect(() => {
   if (showSuccessModal) {
     setTimeout(() => {
       setShowSuccessModal(false);
     }, 1000);
   }
 }, [showSuccessModal]);

 // Hide error modal after 3 seconds
 useEffect(() => {
   if (showSaveQuizErrorModal) {
     setTimeout(() => {
       setShowSaveQuizErrorModal(false);
     }, 3000);
   }
 }, [showSaveQuizErrorModal]);

 // Success modal component
 const SuccessModal = () => {
   return (
     <div className="fixed inset-0 flex items-center justify-center z-50">
       <div className="fixed inset-0 bg-black opacity-50"></div>
       <div className="bg-white rounded-lg p-8 max-w-md mx-auto relative">
         <div className="flex justify-center mb-4">
           <span ><DoneIcon sx={{ color: "green" }} /></span>
         </div>
         <h2 className="text-2xl font-bold mb-4 text-center">Success!</h2>
         <p className="text-gray-600">Quiz Saved successfully!</p>
       </div>
     </div>
   )
 }

 // Error modal component
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

 // Handle MCQ type selection from modal
 const handleShowModal = (e) => {
   setShowModal(false);
   if (e.target.id === "btn-mcq-single") {
     setMcqType("single-correct");
   } else {
     setMcqType("multiple-correct");
     dispatch(setquiztype(mcqType))
   }
 };

 // Save quiz to local storage
 const handleSaveQuiz = () => {
   if (questions.length === 0) { setShowSaveQuizErrorModal(true); return }
   else {
     const newQuiz = { quiztype, quiztitle: quizTitle, quizdescription: quizDescription, questions, isactive, datecreated: new Date().toLocaleString() };
     dispatch(setquiztitle(newQuiz.quiztitle))
     dispatch(setquizdescription(newQuiz.quizdescription))
     dispatch(setdatecreated(newQuiz.datecreated))
     const existingData = localStorage.getItem("Quiz");//here all the quizzes are stored as an array of objects called "Quiz".by this code we are retrieving the data from localstorage 

     let Quiz = existingData ? JSON.parse(existingData) : [];//if data already exists then we get it else we declare empty array
     // Append new data to the existing array
     if (Quiz.length && newQuiz.quiztitle === Quiz[Quiz.length - 1].quiztitle && newQuiz.quizdescription === Quiz[Quiz.length - 1].quizdescription && newQuiz.questions.length === Quiz[Quiz.length - 1].questions.length) {
       setShowSaveQuizErrorModal(true);
       return
     } else {
       Quiz.push(newQuiz)
       localStorage.setItem("Quiz", JSON.stringify(Quiz));
       setShowSuccessModal(true)
     }
     dispatch(resetCreateQuizState());//reset the redux store state after saving the quiz in local storage
   }
 };

 return (
   <div className="flex flex-col items-center min-h-screen ">
     <div className="px-4 py-8 mt-3 w-full max-w-3xl bg-black/30 rounded-lg shadow-md">
       {/* Modal for selecting MCQ type */}
       {showModal && <Modal handleShowModal={handleShowModal} />}
       <h1 className="text-2xl font-bold text-center text-white mb-6">
         Create New Quiz
       </h1>
       {/* Quiz title input */}
       <input
         className={`w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 ${quizTitle.length >= 10 && quizTitle.length <= 30 ? 'border-green-500 text-green-700 focus:ring-green-500' : 'border-red-500 text-red-700 focus:ring-red-500'}`}
         type="text"
         placeholder="Quiz title (must be 10 to 30 characters)"
         value={quizTitle}
         onChange={(e) => setQuizTitle(e.target.value)}
       />
       {/* Quiz description textarea */}
       <textarea
         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         placeholder="Quiz description"
         onChange={(e) => { setQuizDescription(e.target.value) }}
       />
       {/* Render single or multiple correct component based on mcqType */}
       {mcqType === "single-correct" ? <SingleCorrect quizTitle={quizTitle} /> : mcqType === "multiple-correct" ? <MultipleCorrect quizTitle={quizTitle} /> : null}
       {/* Save quiz button */}
       <button onClick={handleSaveQuiz} className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
         Save Quiz
       </button>
     </div>
     {/* Show success modal if quiz is saved */}
     {showSuccessModal && <SuccessModal />}
     {/* Show error modal if there is an error while saving quiz */}
     {showSaveQuizErrorModal && <SaveQuizErrorModal />}
   </div>
 );
}

export default Createquizform;

