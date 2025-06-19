import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Homescreen from './pages/Homescreen/Homescreen';
import About from './pages/About/About';
import  Resources from './pages/Resources/Resources';
import  FAQ from './pages/FAQ/FAQ';
import  How_it_works from './pages/How_it_works/How_it_works';
import  Logout  from './pages/Logout/Logout';


const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homescreen />
      },
      {
        path: "/About",
        element: <About/>
      }, {
        path: "/How_it_works",
        element: <How_it_works />
      },
      {
        path: "/Resources",
        element: <Resources />
      }, {
        path: "/FAQ",
        element: <FAQ />
      },
      {
        path: "/Logout",
        element: <Logout />
      },
      


    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Approuter} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
