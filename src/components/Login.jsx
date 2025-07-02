import React, { useReducer, useRef, useState } from 'react';
import { validateData } from '../utilities/validate';
import Header from './Header';

const Login = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [error, setError] = useState('');
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const isValid = validateData(email.current.value, password.current.value);
    console.log(isValid);
    setError(isValid);
  };

  return (
    <div className="m-3 mx-5 background-image: linear-gradient(to bottom,black )">
      <Header />
      <div className="absolute top-0 left-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
          alt=""
        />
      </div>
      <div className="absolute bg-black w-1/4 p-10 my-36 left-0 right-0 mx-auto opacity-85 rounded-md">
        <p className="text-xl text-white">
          {isSignUpPage ? 'Sign Up' : 'Sign In'}
        </p>
        <form className="text-white" onSubmit={(e) => e.preventDefault()}>
          {isSignUpPage && (
            <input
              className="bg-gray-700 my-3 w-full text-sm p-3 rounded"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            className="bg-gray-700 my-3 w-full text-sm p-3 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="bg-gray-700 my-3 w-full text-sm p-3 rounded"
            type="password"
            placeholder="Password"
          />
          {error && <p className="text-red-600 text-lg font-bold">{error}</p>}

          <button
            className="w-full bg-red-600 p-2 my-5 rounded"
            onClick={() => handleButtonClick()}
          >
            {isSignUpPage ? 'Sign Up' : 'Sign In'}
          </button>
          <p
            className="text-sm cursor-pointer"
            onClick={() => setIsSignUpPage(!isSignUpPage)}
          >
            {isSignUpPage
              ? 'Existing User? Login Now!'
              : 'New to Netflix? Sign Up Now'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
