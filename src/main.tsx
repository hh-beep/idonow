// General Imports
import {  StrictMode  } from "react";
import {  createRoot  } from "react-dom/client"
import "./index.css"

// API's
import Firebase from "./API/Firebase";

// Routes Imports 
import {
  RouterProvider as Router,
  createHashRouter 
} from "react-router-dom";

import Homepage from "./Routes/Homepage/Homepage";
import Photo from "./Routes/Photo/Photo";
import Cd from "./Routes/Cd/Cd";





// Initialize the Firebase SDK's
Firebase()



// Create the Webpage's routes
const routes = createHashRouter([
  {
    path: "/",
    element: <Homepage /> 
  },
  {
    path: "/Photo/:id",
    element: <Photo />
  },
  {
    path: "/Cd/:id",
    element: <Cd />
  }
])





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router router={  routes  }/>
  </StrictMode>,
)
