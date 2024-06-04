import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Quizcard(props) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="p-6">
            <div className='w-full overflow-auto'><h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 text-center t">
            {props.item.quiztitle}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 text-center">
            {props.item.quizdescription}
          </p></div>
          <br/>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">{`${props.item.questions.length} Questions`}</span>
          <NavLink to="/userinfo"> <button onClick={()=>props.handleStartQuiz(props.index)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Start Quiz
            </button></NavLink> 
          </div>
        </div>
      </div>
    );
  }

  Quizcard.propTypes = {
    index: PropTypes.number.isRequired,
    handleStartQuiz: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    
  };
  
  export default Quizcard;