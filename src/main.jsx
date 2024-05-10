import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SignupPage from './pages/user/SignupPage';
import SigninPage from './pages/user/SigninPage';
import InstructorSigninPage from './components/instructor/InstructorSignin';
import InstructorSignupPage from './pages/instructor/InstructorSignupPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/user/signup",
    element: <SignupPage/>,
  },
  {
    path: "/user/signin",
    element: <SigninPage/>,
  },
  {
    path: "/instructor/instructorsignup",
    element: <InstructorSignupPage/>,
  },
  {
    path: "/instructor/instructorsignin",
    element: <InstructorSigninPage/>,
  },

]);

















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
