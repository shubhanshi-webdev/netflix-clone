import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './Error';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import {addUser , removeUser} from '../Store/Slics/userSlice';


const Body = () => {
    const dispatch = useDispatch();
    const loginRoute = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <Error />
        },
        {
            path: '/browser',
            element: <Browse />
        }
    ]
    )

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, displayName, email,photoURL} = user;
            //   console.log(user, 'this is user')
              dispatch(addUser({
                userid : uid,
                displayName : displayName,
                emailId : email,
                photoURL: photoURL

              }))
            } else {
                // console.log(user, 'this is user')
              dispatch(removeUser())
            }
          });
          
    }, [])
  return (
    <div>
        <RouterProvider router={loginRoute} />
    </div>
  )
}

export default Body