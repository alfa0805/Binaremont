import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Projects from "../Pages/Project";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/project",
          element:<Projects/>
        }
      ]
    }
])