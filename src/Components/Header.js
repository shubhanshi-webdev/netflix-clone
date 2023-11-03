import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // console.log(auth);
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  // console.log(userData)
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // navigate('/error')
    });
  }
  return (
    <div className='header'>
        <div className=''>
            <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
        </div>
        {
          userData &&  
          <div className='navigation'>
          <nav>
            <ul className='userDetails'>
              <li>
                <p>{userData.displayName}</p>
              </li>
              <li>
                <button className='logoutBtn' onClick={handleLogout}>Signout</button>
              </li>
            </ul>
          </nav>
        </div>
        }
       
    </div>
  )
}

export default Header