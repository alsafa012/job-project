import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import Dashboard from "../Layout/Dashboard";
import AddHousePage from "../Dashboard/OwnerDashboard/AddHousePage/AddHousePage";

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
               {
                    path:"/",
                    element:<HomePage></HomePage>
               },
               {
                    path:"/login",
                    element:<LoginPage></LoginPage>
               },
               {
                    path:"/registration",
                    element:<RegistrationPage></RegistrationPage>
               },
          ]
     },
     {
          path:"/dashboard",
          element:<Dashboard></Dashboard>,
          children:[
               {
                    path:"/dashboard/addHouse",
                    element:<AddHousePage></AddHousePage>
               },
          ]
     }
]);

export default myCreatedRouter;