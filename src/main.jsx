import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Contact from './pages/contact.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Film from './pages/Film.jsx'

const router=createBrowserRouter([{
  element:<App />,
  children:
  [
    {
    path:"/",
    element:<Home />
    },
    {
      path:"/film",
      element:<Film/>
    },
    {
      path:"/contact",
      element:<Contact />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
