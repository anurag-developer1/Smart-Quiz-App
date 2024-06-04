/*import { NavLink } from "react-router-dom";

import smartquiz from './smartquiz.png';
function Navbar() {
    return (
        <nav className=" bg-black/50 px-1 py-1  w-screen  h-20 flex flex-row justify-between ">
          <NavLink to="/home"><figure className="flex h-full  ml-1 items-center space-x-1"><img  src={smartquiz} alt="logo" className="h-full object-contain"/>
          <span className="font-bold text-2xl text-[#6CB8C6]">Smart</span><span className="font-bold text-2xl text-white">Quiz</span></figure>
          </NavLink>
          
            
          
            <ul className="flex  space-x-8 items-center justify-center mr-4">
            <NavLink to="/createquiz"><li className="h-10 text-[1rem] bg-black text-white px-2 py-1 rounded hover:bg-slate-50 hover:text-slate-900">Create Quiz</li></NavLink>  
            <NavLink to="/myquizzes"><li className="bg-black text-white px-2 py-1 rounded hover:bg-slate-50 hover:text-slate-900">My Quizzes</li></NavLink>    
            </ul>
        </nav>
    )
}

export default Navbar*/


import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import almabetterlogo from './almabetter_logo.jpeg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black px-4 py-3 md:py-4 flex items-center justify-between sticky top-0 z-[100] ">
      <div className="flex items-center">
        <NavLink to="/home" className="flex items-center">
          <img src={almabetterlogo} alt="logo" className="h-14 mr-2" />
          <span className="font-bold text-2xl text-[#6CB8C6]">Smart</span>
          <span className="font-bold text-2xl text-white">Quiz</span>
        </NavLink>
      </div>
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/createquiz"
          className="text-white px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300"
        >
          Create Quiz
        </NavLink>
        <NavLink
          to="/myquizzes"
          className="text-white px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300"
        >
          My Quizzes
        </NavLink>
        <NavLink
          to="/playquiz"
          className="text-white px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300"
        >
          Play Quiz
        </NavLink>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
        <MenuIcon/>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/80 text-white py-4 px-6 z-[100]">
          <NavLink
            to="/createquiz"
            className="block text-white py-2 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Create Quiz
          </NavLink>
          <NavLink
            to="/myquizzes"
            className="block text-white py-2 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Quizzes
          </NavLink>
          <NavLink
            to="/playquiz"
            className="block text-white py-2 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Play Quiz
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
