import { useState, useEffect } from 'react';

const MyQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('Quiz')) || [];
    setQuizzes(storedQuizzes);
  }, []);

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
                      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        Play
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
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
    </div>
  );
};

export default MyQuizzes;




