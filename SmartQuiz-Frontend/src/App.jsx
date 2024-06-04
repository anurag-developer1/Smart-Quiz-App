import { Routes, Route ,useLocation} from "react-router-dom"
import Navbar from "./components/navbar/Navbar.jsx";
import Login from "./pages/authentication-page/Login.jsx";
import HomePage from "./pages/home-page/Homepage.jsx"
import Createquizform from "./pages/create-quiz-page/Createquizform.jsx"
import Myquizzes from "./pages/myquizzes-page/Myquizzes.jsx"
import Playquiz from "./pages/playquiz-page/Playquiz.jsx";
import ResultPage from "./pages/result-page/Resultpage.jsx"
import Userinfo from "./pages/userinfo/Userinfo.jsx";
import Displayquestions from "./pages/display-questions-page/Displayquestions.jsx"





function App() {
  const location=useLocation()
  return (
    <>{location.pathname !== "/" && <Navbar/>}
    <Routes >
      <Route path="/" element={ <Login/>} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/createquiz" element={ <Createquizform />} />
      <Route path="/myquizzes" element={ <Myquizzes />} />
      <Route path="/playquiz" element={ < Playquiz/>} />
      <Route path="/results" element={ < ResultPage/>} />
      <Route path="/userinfo" element={ < Userinfo/>}/>
      <Route path="/displayquestions" element={ < Displayquestions/>}/>
    </Routes></>
    
  )
}

export default App





