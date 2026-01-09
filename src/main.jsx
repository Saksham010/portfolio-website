import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Projects from './routes/projects.jsx'
import Article from './routes/article.jsx'
import './index.css'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Experience from './routes/experience.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/project',
    element:<Projects/>,
  },
  {
    path:'/experience',
    element:<Experience/>
  },
  {
    path:'/article',
    element:<Article/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
