import { FaHome } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import Swal from "sweetalert2";
import useUser from "../Components/hook/useUser";
const Dashboard = () => {
     const isAdmin = true;
     const isCreator = false;
     const navigate = useNavigate();
     const [toggle, setToggle] = useState(false);
     const [users] = useUser();
     console.log(users);
     const user = true;
     const handleUserSignOut = () => {
          Swal.fire({
               title: "Are you sure?",
               text: "You want to sign out?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes",
          }).then((result) => {
               if (result.isConfirmed) {
                    console.log("sdk sign");
                    navigate("/");
               }
          });
     };

     return (
          <div className="light-bg">
               <div className="container mx-auto text-white">
                    <div className="drawer lg:drawer-open min-h-screen">
                         {/* <div className="drawer lg:drawer-open min-h-screen overflow-hidden max-h-screen"> */}
                         <input
                              id="my-drawer-2"
                              type="checkbox"
                              className="drawer-toggle"
                         />
                         <div className="drawer-content relative max-h-screen overflow-y-auto">
                              {/* Page content here */}
                              <label
                                   onClick={() => setToggle(!toggle)}
                                   htmlFor="my-drawer-2"
                                   className="btn red drawer-button lg:hidden fixed z-10 top-2 right-2 "
                              >
                                   <button>
                                        {toggle ? <IoClose /> : <FaListUl />}
                                   </button>
                              </label>
                              {/* <div className="border bg-red-300"> */}
                              <Outlet></Outlet>
                              {/* </div> */}
                         </div>
                         <div className="drawer-side min-h-screen">
                              <label
                                   htmlFor="my-drawer-2"
                                   aria-label="close sidebar"
                                   className="drawer-overlay"
                              ></label>
                              <ul className="menu p-4 w-80 min-h-full bg-base-200  dark-bg text-white relative">
                                   {/* Sidebar content here */}
                                   {user && (
                                        <>
                                             <div className="w-full my-3">
                                                  <img
                                                       className="rounded-full h-[100px] w-[100px] object-fill mx-auto"
                                                       src={
                                                            users?.photoURL
                                                                 ? users.photoURL
                                                                 : "https://i.ibb.co/cCMpkzh/product-8-300x300.jpg"
                                                       }
                                                       alt=""
                                                  />
                                                  <p className="font-medium text-center p-2">
                                                       {users?.role === "owner"
                                                            ? "House Owner"
                                                            : "House Renter"}
                                                  </p>
                                             </div>
                                        </>
                                   )}

                                   {users.role === "owner" && (
                                        <>
                                             <li>
                                                  <NavLink to="/dashboard/addHouse">
                                                       Add House for rent
                                                  </NavLink>
                                             </li>
                                             <li>
                                                  <NavLink to="/dashboard/ownerManageBookings">
                                                       Manage Booking
                                                  </NavLink>
                                             </li>
                                             <li>
                                                  <NavLink to="/dashboard/ownerHouseList">
                                                       My list of Houses
                                                  </NavLink>
                                             </li>
                                        </>
                                   )}
                                   {users.role === "renter" && (
                                        <>
                                             <li>
                                                  <NavLink to="/dashboard/createContext">
                                                       Create A Contest
                                                  </NavLink>
                                             </li>
                                             <li>
                                                  <NavLink to="/dashboard/seeAllContext">
                                                       My Created Contest
                                                  </NavLink>
                                             </li>
                                             <li>
                                                  <NavLink to="/dashboard/contestSubmission">
                                                       All Submissions
                                                  </NavLink>
                                             </li>
                                        </>
                                   )}
                                   {/*  */}
                                   <div className="divider divider-accent"></div>
                                   <li>
                                        <NavLink to="/">
                                             <FaHome></FaHome>Home
                                        </NavLink>
                                   </li>
                                   {/* <li className="absolute bottom-5"> */}
                                   <div className="h-[80px]">
                                        <button
                                             className="absolute bottom-5 left-0 right-0 light-bg flex items-center justify-center gap-2 text-white hover:bg-[#2a2c39] btn w-[95%] mx-auto p-4 border-none"
                                             onClick={handleUserSignOut}
                                        >
                                             <CgLogOut />
                                             Sign Out
                                        </button>
                                   </div>
                                   {/* </li> */}
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;
