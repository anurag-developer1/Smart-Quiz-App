/*import PropTypes from 'prop-types';

function Modal(props) {
    
  return (
    <div className='w-[100vw] h-[100vh] flex bg-slate-400 justify-center items-center'>
      <div className='w-1/2 h-1/3 flex flex-row flex-wrap justify-around items-center bg-orange-200'>
        <p className='font-bold text-black text-center px-2 py-2 w-full'>Select a quiz type</p>
        <button id='btn-mcq-single'  className=" bg-black text-white px-2 py-1 rounded hover:bg-slate-50 hover:text-slate-900" onClick={(e)=>{props.handleShowModal(e)}}>MCQ-single correct</button>
        <button id='btn-mcq-multiple' className=" bg-black text-white px-2 py-1 rounded hover:bg-slate-50 hover:text-slate-900" onClick={(e)=>{props.handleShowModal(e)}}>MCQ-multiple correct</button>
        <button id='btn-shortanswer' className="bg-black text-white px-2 py-1 rounded hover:bg-slate-50 hover:text-slate-900" onClick={(e)=>{props.handleShowModal(e)}}>Short answer type</button>
      </div>
      
    </div>
  )
}

Modal.propTypes = {
  handleShowModal: PropTypes.func.isRequired
};

export default Modal;*/

import PropTypes from 'prop-types';

function Modal(props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <p className="text-xl font-bold text-white text-center mb-6">
          Select a quiz type
        </p>
        <div className="flex flex-col space-y-4">
          <button
            id="btn-mcq-single"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={(e) => props.handleShowModal(e)}
          >
            MCQ-single correct
          </button>
          <button
            id="btn-mcq-multiple"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={(e) => props.handleShowModal(e)}
          >
            MCQ-multiple correct
          </button>
          
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};

export default Modal;





