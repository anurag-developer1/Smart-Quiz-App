/*import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import PropTypes from 'prop-types';


function Error({showError}){ return (!showError?null:<div><p>Please enter correct username and password</p></div>)}

function Login() {
    
    const navigate = useNavigate();
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
   
    const [isTyped, setIsTyped] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [showError,setShowError]=useState(false)
     
    
    
    const handleClick = () => {
      if (username === "123" && password === "123"){setIsValid(true);navigate("/home");}
      if (username === "" || password === "") {
        setIsTyped(false);setShowError(true)
      }else{setIsTyped(true)} 
      if(isTyped===false||isValid===false){setShowError(true)}
     
      };
      

   
    
    
  return (
    <div className='flex w-[100vw] h-[100vh] justify-center items-center'><div className='w-[30vw] h-[30vh] mx-auto bg-slate-600 flex flex-col  justify-center items-center'>
    <span className="font-bold text-2xl text-[#6CB8C6]">Smart</span><span className="font-bold text-2xl text-white">Quiz</span>
    <input
      onChange={(e) => {
        setUsername(e.target.value);
      }}
      type="text"
      placeholder="username"
    />
    <br />
    
    <input
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      type="password"
      placeholder="Password"
    />
    <br />
    <div><p>Username:123</p><p>Password:123</p></div>
    <Error showError={showError}/><br />
    <button className="bg-black text-white px-2 py-1 rounded hover:bg-slate-50 hover:text-slate-900" onClick={handleClick}>Login</button>
  </div></div>
    
    
  );
}
Error.propTypes = {
  showError: PropTypes.bool.isRequired,
 
  
};

export default Login*/

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

function Error({ showError }) {
  return !showError ? null : (
    <div className="text-red-500 mb-4">Please enter correct username and password</div>
  );
}

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isTyped, setIsTyped] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showNote,setShowNote]=useState(true)

  const handleClick = () => {
    if (username === '123' && password === '123') {
      setIsValid(true);
      navigate('/home');
    }
    if (username === '' || password === '') {
      setIsTyped(false);
      setShowError(true);
    } else {
      setIsTyped(true);
    }
    if (isTyped === false || isValid === false) {
      setShowError(true);
    }
  };
  const handleClose=()=>{setShowNote(false)}

  return (
    <>
    {showNote && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[3000] bg-white p-3 rounded-lg shadow-lg flex justify-center items-center flex-col">
          <button onClick={handleClose} className="ml-auto">
            <CloseIcon sx={{ color: 'red' }} />
          </button>
          <h1 className="font-bold text-2xl text-black">NOTE</h1>
          <p>
            This login page is for demonstration purpose only. It does not have
            server authentication mechanism. The credentials are hard coded. Use
            the following credentials:
          </p>
          <span className="font-bold">Username: 123</span>
          <span className="font-bold">Password: 123</span>
        </div>
      )}
    <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center "
    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542281286-9e0a16bb7366)' }}
  >
    <div className="backdrop-blur-lg bg-black/40 rounded-lg p-8 shadow-lg relative z-10">
      <div className="flex flex-col items-center mb-6">
        <span className="font-bold text-2xl text-[#6CB8C6]">Smart</span>
        <span className="font-bold text-2xl text-white">Quiz</span>
      </div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="Username"
        className="w-full mb-4 p-2 rounded-md shadow-sm"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-2 rounded-md shadow-sm"
      />
      <div className="text-white mb-4">
        <p>Username: 123</p>
        <p>Password: 123</p>
      </div>
      <Error showError={showError} />
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-slate-50 hover:text-slate-900 transition-colors duration-300"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  </div></>
    
  );
}

Error.propTypes = {
  showError: PropTypes.bool.isRequired,
};

export default Login;