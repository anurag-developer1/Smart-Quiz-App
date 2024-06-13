import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


// ConfirmDeleteModal component
const ConfirmDeleteModal = (props) => {
  const {quizzes}=props

  const handleDelete = () => {
   const updatedQuizzes=quizzes.filter((quiz,index)=>index!==props.activeDeleteButtonIndex)
   props.setQuizzes(updatedQuizzes);
    localStorage.setItem("Quiz", JSON.stringify(updatedQuizzes));//update localstorage "Quiz" which is an array of objects representing a single quiz
   props.  setIsDeleteButtonActive(false);
  };

  const handleCancel = () => {
   props. setIsDeleteButtonActive(false);
  };

  return (
    <>
       (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-800 opacity-75"
            onClick={handleCancel}
          ></div>

          <div className="bg-white rounded-lg p-6 max-w-md mx-auto relative">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-6">This item will be deleted forever and cannot be recovered. Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded mr-2"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )
    </>
  );
};


//edit form component that appears on clicking the edit button for each quiz
const EditForm = (props) => {
  const {activeEditButtonIndex,setEditQuizDescription,setEditQuizTitle,quizzes}=props
  useEffect(() => {
    const editThisQuiz = quizzes[activeEditButtonIndex] 
    setEditQuizTitle(editThisQuiz.quiztitle);setEditQuizDescription(editThisQuiz.quizdescription)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeEditButtonIndex]);


  return (
    <div className="relative">
      {/*conditional rendering of the edit form based on the isEditFormActive state*/}
      {props.isEditFormActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="mb-4">
              <label htmlFor="quizTitle" className="block font-bold mb-2">
                Quiz Title
              </label>
              <input
                type="text"
                id="quizTitle"
                value={props.editQuizTitle}
                onChange={(e) => props.setEditQuizTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="quizDescription" className="block font-bold mb-2">
                Quiz Description
              </label>
              <textarea
                id="quizDescription"
                value={props.editQuizDescription}
                onChange={(e) =>props. setEditQuizDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows="4"
              />
            </div>
            <button
              onClick={props.handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


//MyQuizzes component
const MyQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [editQuizTitle,setEditQuizTitle]=useState("")
  const [editQuizDescription,setEditQuizDescription]=useState("")
  const [isEditFormActive,setIsEditFormActive]=useState("")
  const [activeEditButtonIndex,setActiveEditButtonIndex]=useState(0)//tracks the index of the quiz for which the edit button was pressed
  const [activeDeleteButtonIndex,setActiveDeleteButtonIndex]=useState(0)//tracks the index of the quiz for which the delete button was pressed
  const [isDeleteButtonActive,setIsDeleteButtonActive]=useState(false)
  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('Quiz')) || [];
    setQuizzes(storedQuizzes);
  
    const handleStorageChange = () => {
      const updatedQuizzes = JSON.parse(localStorage.getItem('Quiz')) || [];
      setQuizzes(updatedQuizzes);
    };
    //add event listener for storage events(whenever a quiz is edited and saved the localstorage.setItem triggers a global storage event which can be listened to and run change the state "quizzes" to the latest saved changes and re render the component)
    window.addEventListener('storage', handleStorageChange);
  
    //clean up event listener when this component will unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleSave = () => {
    //Update a particular quiz for which the edit button was pressed and save button was then pressed in the editform component
    const updatedQuizzes = [...quizzes];
    const updatedQuiz = {
      quiztype: updatedQuizzes[activeEditButtonIndex].quiztype,
      quiztitle: editQuizTitle,
      quizdescription: editQuizDescription,
      questions: updatedQuizzes[activeEditButtonIndex].questions,
      isactive: updatedQuizzes[activeEditButtonIndex].isactive,
      datecreated: updatedQuizzes[activeEditButtonIndex].datecreated,
    };
  
    updatedQuizzes[activeEditButtonIndex] = updatedQuiz;
  
    setQuizzes(updatedQuizzes);
    localStorage.setItem("Quiz", JSON.stringify(updatedQuizzes));
    setIsEditFormActive(false);
  };
   
  const handleEdit=(index)=>{setIsEditFormActive(true);setActiveEditButtonIndex(index)}
  const handleDelete=(index)=>{setIsDeleteButtonActive(true);setActiveDeleteButtonIndex(index)}
  const toggleQuizStatus = (index) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[index].isactive = !updatedQuizzes[index].isactive;
    setQuizzes(updatedQuizzes);
    localStorage.setItem('Quiz', JSON.stringify(updatedQuizzes));
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Quizzes</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
        <div className="overflow-x-auto w-full">
          {/* Table for displaying data and actions related to each quiz */}
          <table className="min-w-full table-auto w-full">
            <thead className="bg-gradient-to-r from-black to-blue-900 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Serial Number</th>
                <th className="py-3 px-6 text-left">Quiz Title</th>
                <th className="py-3 px-6 text-left">Created on</th>
                <th className="py-3 px-6 text-left">Quiz Type</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {quizzes.map((quiz, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-4 px-6 whitespace-no-wrap">{index + 1}</td>
                  <td className="py-4 px-6 whitespace-no-wrap">{quiz.quiztitle}</td>
                  <td className="py-4 px-6 whitespace-no-wrap">{quiz.datecreated}</td>
                  <td className="py-4 px-6 whitespace-no-wrap">{quiz.quiztype}</td>
                  <td className="py-4 px-6 text-center relative">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={quiz.isactive}
                        onChange={() => toggleQuizStatus(index)}
                      />
                      <div
                        className={`relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-300   ${
                          quiz.isactive ? 'peer-checked:bg-green-600' : 'peer-checked:bg-gray-400'
                        }`}
                      >
                        <div
                          className={`absolute inset-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                            quiz.isactive ? 'translate-x-full' : 'translate-x-0'
                          }`}
                        ></div>
                      </div>
                      <span className="ml-3 text-gray-900 dark:text-gray-900">
                        {quiz.isactive ? 'Active' : 'Inactive'}
                      </span>
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center space-x-2">
                      
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300" onClick={() => handleEdit(index)}>
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300" onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Conditional rendering of the edit form and delete confirmation modal */}
      {isEditFormActive && <EditForm setIsEditFormActive={setIsEditFormActive} isEditFormActive={isEditFormActive} editQuizDescription={editQuizDescription} setEditQuizDescription={setEditQuizDescription} editQuizTitle={editQuizTitle} setEditQuizTitle={setEditQuizTitle} handleSave={handleSave} activeEditButtonIndex={activeEditButtonIndex} quizzes={quizzes}  />}
      {isDeleteButtonActive && <ConfirmDeleteModal activeDeleteButtonIndex={activeDeleteButtonIndex} setIsDeleteButtonActive={setIsDeleteButtonActive} quizzes={quizzes} setQuizzes={setQuizzes} />}
    </div>
  );
};

EditForm.propTypes = {
  setIsEditFormActive: PropTypes.func.isRequired,
  isEditFormActive: PropTypes.bool.isRequired,
  editQuizDescription: PropTypes.string.isRequired,
  setEditQuizDescription: PropTypes.func.isRequired,
  editQuizTitle: PropTypes.string.isRequired,
  setEditQuizTitle: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  activeEditButtonIndex: PropTypes.number.isRequired,
  quizzes:PropTypes.array.isRequired,
};

ConfirmDeleteModal.propTypes = {activeDeleteButtonIndex: PropTypes.number.isRequired,setIsDeleteButtonActive: PropTypes.func.isRequired,quizzes:PropTypes.array.isRequired,setQuizzes:PropTypes.func.isRequired}


export default MyQuizzes;




