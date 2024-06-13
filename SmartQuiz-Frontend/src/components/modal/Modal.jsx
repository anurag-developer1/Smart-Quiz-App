import PropTypes from 'prop-types';
//Modal that shows the options for selecting an MCQ type
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





