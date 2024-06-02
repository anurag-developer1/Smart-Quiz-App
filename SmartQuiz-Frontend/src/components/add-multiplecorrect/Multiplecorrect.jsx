import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from "react-redux";
import { setquestions } from "../../features/createQuizSlice";

function MultipleCorrect() {

  const [btn1Clicked, setBtn1Clicked] = useState(false);
  const [btn2Clicked, setBtn2Clicked] = useState(false);
  const [questiontext, setQuestiontext] = useState("");
  const [optiontext, setOptiontext] = useState("");
  const [options, setOptions] = useState([]);
  const [chk1checked, setChk1Checked] = useState(false);
  const {questions} = useSelector((store)=>store.createQuiz); // Initialize questions as an empty array
  const [addQuestionErrorModal,setAddQuestionsErrorModal]=useState(false)
  const[showSuccessModal,setShowSuccessModal]=useState(false)
  const dispatch=useDispatch();
  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 1000); // hide modal after 3 seconds
    }
  }, [showSuccessModal]);

  const SuccessModal=()=>{return(<div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="fixed inset-0 bg-black opacity-50"></div>
  <div className="bg-white rounded-lg p-8 max-w-md mx-auto relative">
    <div className="flex justify-center mb-4">
      <span ><DoneIcon sx={{ color: "green" }}/></span>
    </div>
    <h2 className="text-2xl font-bold mb-4 text-center">Success!</h2>
    <p className="text-gray-600">Question added successfully!</p>
  </div>
</div>)}


  const ErrorModal = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="bg-white rounded-lg shadow-lg p-6 z-10">
          <h2 className="text-xl font-bold mb-4">Error</h2>
          <p className="text-gray-700">Please add at least two options before saving the question.</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6"
            onClick={() => setAddQuestionsErrorModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  const handlecheckboxchk1 = () => {
    setChk1Checked(!chk1checked);
  };

  const handleAddOptions = () => {
    setBtn1Clicked(true);
  };

  const handleAddThisoption = () => {
    setOptions((options) => [
        ...options,
        { option: optiontext, correct: chk1checked },
      ])
    setOptions((options) => {
      const finalOptions = options.map((option, i = 0) => {
        i++;
        return { ...option, id: i };
      });
      return finalOptions; // Return the new array
    });
    setChk1Checked(false);
    setOptiontext("")
  };

  const handleDeleteOption = (id) => {
    setOptions((options) => {
      return options.filter((option) => option.id !== id);
    });
  };

  const handleAddQuestions = () => {
    setBtn2Clicked(true);
  };

  const handleAddThisQuestion = () => {
    if( options.length<2){setAddQuestionsErrorModal(true)}
    else{dispatch(setquestions( { question: questiontext, answer: options }))
    
    setBtn1Clicked(false);
    setQuestiontext("");
    setOptiontext("");
    setChk1Checked(false);
    setOptions([])
    setShowSuccessModal(true)}

    
  };

  return (
    <div className="container mx-auto p-4 pt-6 max-w-3xl">
      {!btn2Clicked && (
        <div className="flex justify-center">
          <button
            id="btn-2"
            className={`${
              btn1Clicked
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } font-bold py-2 px-4 rounded transition-colors duration-200`}
            onClick={handleAddQuestions}
          >
            Add Questions
          </button>
        </div>
      )}

      {btn2Clicked && (
        <div>
          <div className="SingleCorrect">
            <p className="text-lg font-bold text-white mb-4 text-center">
              Question {questions.length + 1}
            </p>
            <textarea
              id="questiontext"
              value={questiontext}
              onChange={(e) => setQuestiontext(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type the question here"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              id="1"
              className={`${
                btn1Clicked
                  ? "bg-gray-300 text-gray-600"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } font-bold py-2 px-4 rounded transition-colors duration-200`}
              onClick={handleAddOptions}
            >
              Add Options
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {options.map((option, i = 0) => {
              i++;
              return (
                <div
                  className="bg-white flex items-center space-x-4 justify-between w-full sm:w-1/2 lg:w-1/3 p-4 mb-4 rounded shadow-md border border-gray-300"
                  key={i}
                >
                  <div>
                    {option.correct ? (
                      <CheckIcon sx={{ color: "green" }} />
                    ) : null}
                  </div>
                  <p className="text-lg flex-1 overflow-hidden text-gray-700 text-ellipsis">
                    {i}. {option.option}
                  </p>
                  <div>
                    <button
                      id={option.id}
                      onClick={() => {
                        handleDeleteOption(option.id);
                      }}
                      className="text-red-500 focus:outline-none"
                    >
                      <DeleteForeverIcon sx={{ color: "red" }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          {btn1Clicked ? (
            <div className="mt-4">
              <p className="text-lg font-bold text-white text-center mb-2">
                Answer options..
              </p>
              <textarea
                id="optiontext"
                value={optiontext}
                onChange={(e) => setOptiontext(e.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type the option here"
              />
              <div className="flex items-center mt-2">
                <input
                  id="chk1"
                  checked={chk1checked}
                  onChange={handlecheckboxchk1}
                  type="checkbox"
                  className="form-checkbox h-5 w-5  text-blue-600 focus:ring-blue-500 "
                />
                <label
                  htmlFor="correctAnswer"
                  className="text-lg ml-2 text-white"
                >
                   Correct Option
                </label>
              </div>
             <div className="flex justify-between flex-wrap"> <button
                id="btn-2"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleAddThisoption}
              >
                Add This option
              </button>
              <button
                id="btn-3"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 "
                onClick={handleAddThisQuestion}
              >
                Add This Question 
              </button></div>
            </div>
          ) : null}
        </div>
      )}
      {addQuestionErrorModal&&<ErrorModal/>}
      {showSuccessModal && <SuccessModal />}
    </div>
  );
}

export default MultipleCorrect;