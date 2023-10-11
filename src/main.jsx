import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Layout from './Components/Layout/Layout.jsx'
import User from './Components/User/User.jsx'
import Github, { GithubLoader } from './Components/Github/Github.jsx'

const router=createBrowserRouter([{
      path:"/",
      element:<Layout/>,
      children:[{
        path: "",
        element:<Home/>
      },{
        path:"/about"
        , element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"user/:userid"
        , element:<User/>
      },{
        loader: GithubLoader,
        path:"/github",
        element:<Github/>
      }

  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
