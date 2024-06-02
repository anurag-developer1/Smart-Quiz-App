import Quizcard from "../../components/quizcards/Quizcard";
import{useState, useEffect} from "react"

function Playquiz() {


    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('Quiz')) || [];
    setQuizzes(storedQuizzes);
    }, []);
     return (
    <><h1 className="text-2xl font-bold text-gray-900 text-center my-5">Play Quiz</h1><br/><br/><div className="container mx-auto px-4 my-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {quizzes.map((item, index) => ( item.isactive?<Quizcard key={index} index={index}  item={item} />:null ))}
      
    </div>
    </div></>
    
  );
}

export default Playquiz;