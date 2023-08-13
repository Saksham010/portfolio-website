import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Projects from './routes/projects.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/projects',
    element:<Projects/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
