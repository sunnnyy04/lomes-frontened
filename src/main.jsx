import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Continue from "./pages/Continue.jsx"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/continue..",
        element:<Continue/>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
