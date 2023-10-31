import React, { useState , useRef } from 'react';
import {validation} from '../Utils/validation';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../Utils/firebaseConfig';
import { useNavigate} from 'react-router-dom';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/Slics/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const toggleLoginBtn = () =>{
  setIsSignIn(!isSignIn);
 }
 const emailCheck = useRef(null);
 const passCheck  = useRef(null);
 const displayName  = useRef(null);
 const handleSignInSignUp = ( ) => {
  const message = validation(emailCheck.current.value, passCheck.current.value);
  setErrorMsg(message)
  if(message == null){
    //for signin
    if(isSignIn){
      signInWithEmailAndPassword(auth, emailCheck.current.value, passCheck.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        
        navigate('/browser');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setErrorMsg(errorCode + '' + errorMessage)
        setErrorMsg('Id or Password is invalid')
      });
    }
    else{
      // for signup
      createUserWithEmailAndPassword(auth, emailCheck.current.value, passCheck.current.value, displayName.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid, displayName, email,photoURL} = auth.currentUser;
            //   console.log(user, 'this is user')
              dispatch(addUser({
                userid : uid,
                displayName : displayName,
                emailId : email,
                photoURL: photoURL

              }))
            navigate('/browser');
          }).catch((error) => {
             const errorCode = error.code;
          const errorMessage = error.message;
            setErrorMsg(errorCode + '' + errorMessage)
          }); 
          console.log(user)
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + '' + errorMessage)
        });
    }
  }
 }

  return (
    <>
    <Header />
      <div className='relative netflix-banner'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
      </div>
      <div className='container mx-auto login-form'>
        {/* signin/signup form */}
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className='form-heading'>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          {!isSignIn && 
          <input type='text' ref={displayName} placeholder='Full Name' />
          }
          <input type='email' ref={emailCheck} placeholder='Email or Phone number' />
          <input type='password' ref={passCheck} placeholder='Password' />
          <p className='text-red-500'>{errorMsg}</p>
          <button onClick={handleSignInSignUp}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
          { isSignIn ? <p className='signuptext'> New to Netflix? <a onClick={() => toggleLoginBtn()}>Sign up now.</a></p> : <p className='signuptext'>Already a user <a onClick={() => toggleLoginBtn()}>Sign In</a></p>}
          
          <span className='learnMoretxt'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</span>
        </form>
      </div>
    </>

  )
}

export default Login