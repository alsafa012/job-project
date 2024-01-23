import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import Container from "../Container/Container";
import useUser from "../../Components/hook/useUser";
const Navbar = () => {
     const [toggle, setToggle] = useState(false);
     const [userEmail, setUserEmail] = useState("");
     const [userName, setUserName] = useState("");
     console.log(userEmail);
     console.log(userName);
     const navigate = useNavigate();
     const [users] = useUser();
     console.log(users);

     useEffect(() => {
          
          const userInfoFromLocalStorage = JSON.parse(
               localStorage.getItem("user")
          );
          if (userInfoFromLocalStorage) {
               setUserEmail(userInfoFromLocalStorage.email);
               setUserName(userInfoFromLocalStorage.name);
          }
     }, []);

     const handleSignOut = () => {
          Swal.fire({
               title: "Are you sure?",
               text: "You want to sign out?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!",
          }).then((result) => {
               if (result.isConfirmed) {
                    setUserEmail("");
                    setUserName("");
                    localStorage.removeItem("user");
                    navigate("/");
                    Swal.fire({
                         title: "Deleted!",
                         text: "Sign out successfully",
                         icon: "success",
                    });
               }
          });
     };

     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         // className={({ isActive, isPending }) =>
                         //      isPending
                         //           ? "pending"
                         //           : isActive
                         //           ? "text-white"
                         //           : ""
                         // }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink to="/allHomePages">Our Home</NavLink>
               </li>
               <li>
                    <NavLink to="/contacts">Contact Us</NavLink>
               </li>
               {!userEmail && (
                    <li>
                         <NavLink to="/login">Login</NavLink>
                    </li>
               )}
               {!userEmail && (
                    <li>
                         <NavLink
                              to="/registration"
                              // className={({ isActive, isPending }) =>
                              //      isPending
                              //           ? "pending"
                              //           : isActive
                              //           ? "text-[#ff6900] underline"
                              //           : ""
                              // }
                         >
                              Registration
                         </NavLink>
                    </li>
               )}
          </>
     );

     // /* #252734 dark */   /*  #2a2c39 light */

     return (
          <div>
               <div className="bg-[#252734] fixed z-50 w-full">
                    <Container>
                         <div className="navbar">
                              <div className="navbar-start">
                                   <details className="dropdown mr-5 lg:hidden">
                                        <summary className="flex justify-center items-center">
                                             <label
                                                  onClick={() =>
                                                       setToggle(!toggle)
                                                  }
                                                  className="btn bg-[#2a2c39] text-white"
                                             >
                                                  <button>
                                                       {toggle ? (
                                                            <IoClose />
                                                       ) : (
                                                            <FaListUl />
                                                       )}
                                                  </button>
                                             </label>
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                             {navLists}
                                        </ul>
                                   </details>

                                   <img
                                        className="rounded-full w-10 h-10 md:h-[50px] md:w-[50px]"
                                        src="https://i.ibb.co/NWVnrNn/png-transparent-computer-icons-translation-context-word-intellectual-miscellaneous-company-text-thum.png"
                                        alt="logo"
                                   />

                                   <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                                        House Hunter
                                   </p>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                   <ul className="menu menu-horizontal px-1 text-white">
                                        {navLists}
                                   </ul>
                              </div>

                              <div className="navbar-end ">
                                   <div className="dropdown dropdown-end">
                                        <label
                                             tabIndex={0}
                                             className="btn btn-ghost btn-circle avatar"
                                        >
                                             {userEmail ? (
                                                  <div className="w-10 rounded-full">
                                                       <img
                                                            src="https://i.ibb.co/cCMpkzh/product-8-300x300.jpg"
                                                            // src={user.photoURL}
                                                       />
                                                  </div>
                                             ) : (
                                                  <Link to="/login">
                                                       <button className="text-white">
                                                            Sign Up
                                                       </button>
                                                  </Link>
                                             )}
                                        </label>

                                        {userEmail && (
                                             <div>
                                                  <ul
                                                       tabIndex={0}
                                                       className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                                  >
                                                       <div className="text-black">
                                                            <li>
                                                                 <h2 className="font-medium">
                                                                      {userName}
                                                                 </h2>
                                                            </li>

                                                            <div>
                                                                 {userEmail &&
                                                                      users.role ===
                                                                           "owner" && (
                                                                           <>
                                                                                <li>
                                                                                     <Link to="/dashboard/addHouse">
                                                                                          <h4>
                                                                                               Dashboard
                                                                                          </h4>
                                                                                     </Link>
                                                                                </li>
                                                                           </>
                                                                      )}
                                                            </div>
                                                            <div>
                                                                 {userEmail &&
                                                                      users.role ===
                                                                           "renter" && (
                                                                           <>
                                                                                <li>
                                                                                     <Link to="/renter ">
                                                                                          <h4>
                                                                                               Dashboard
                                                                                          </h4>
                                                                                     </Link>
                                                                                </li>
                                                                           </>
                                                                      )}
                                                            </div>

                                                            <li>
                                                                 {userEmail ? (
                                                                      <button
                                                                           onClick={
                                                                                handleSignOut
                                                                           }
                                                                           className="font-medium"
                                                                      >
                                                                           Sign
                                                                           Out
                                                                      </button>
                                                                 ) : (
                                                                      <Link to="/login">
                                                                           <button className="">
                                                                                Sign
                                                                                Up
                                                                           </button>
                                                                      </Link>
                                                                 )}
                                                            </li>
                                                       </div>
                                                  </ul>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default Navbar;
