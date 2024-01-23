import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import Dashboard from "../Layout/Dashboard";
import AddHousePage from "../Dashboard/OwnerDashboard/AddHousePage/AddHousePage";
import OwnerManageBookings from "../Dashboard/OwnerDashboard/OwnerManageBookings/OwnerManageBookings";
import OwnerHouseList from "../Dashboard/OwnerDashboard/OwnerHouseList/OwnerHouseList";
import AllHousePage from "../Pages/AllHousePage/AllHousePage";

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
                    path:"/allHomePages",
                    element:<AllHousePage></AllHousePage>
               },
               {
                    path:"/details/:id",
                    element:<AllHousePage></AllHousePage>
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
               {
                    path:"/dashboard/ownerManageBookings",
                    element:<OwnerManageBookings></OwnerManageBookings>
               },
               {
                    path:"/dashboard/ownerHouseList",
                    element:<OwnerHouseList></OwnerHouseList>
               },
          ]
     }
]);

export default myCreatedRouter;