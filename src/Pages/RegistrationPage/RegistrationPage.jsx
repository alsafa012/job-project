import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WebsiteTitle from "../../Shared/WebsiteTitle/WebsiteTitle";
// import axios from "axios";
import moment from "moment";
import { MdNavigateBefore } from "react-icons/md";
import useAxiosPublic from "../../Components/hook/useAxiosPublic";
const RegistrationPage = () => {
     const [showPassword, setShowPassword] = useState(false);
     const [errorMessage, setErrorMessage] = useState(false);
     const location = useLocation();
     const navigate = useNavigate();
     const axiosPublic = useAxiosPublic();
     const from = location?.state?.from?.pathname || "/";

     const handleRegister = (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const photo = form.photo.value;
          const phone = form.phone.value;
          const email = form.email.value;
          const password = form.password.value;
          const role = form.role.value;
          console.log(name, photo, phone, role, email, password);
          // validation
          setErrorMessage("");

          if (password.length < 6) {
               setErrorMessage("Please enter at least 6 character password");
               return;
          } else if (!/(?=.*[A-Z])/.test(password)) {
               setErrorMessage(
                    "Password must contain at least one uppercase letter."
               );
               return;
          } else if (!/(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password)) {
               setErrorMessage(
                    "Password must contain at least one special character."
               );
               return;
          }
          // create a new user
          // if (user) {
          //      return Swal.fire({
          //           title: "Error!",
          //           text: "user already logged in",
          //           icon: "error",
          //      });
          // }
          // const userInfoFromLocalStorage = JSON.parse(
          //      localStorage.getItem("user")
          // );
          // if (userInfoFromLocalStorage.email) {
          //      return Swal.fire({
          //           title: "Error!",
          //           text: "User Already logged In",
          //           icon: "error",
          //      });
          // }
          const userInfo = {
               name: name,
               email: email,
               CreatedTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
               role: role,
               contactNumber: phone,
               photoURL: photo,
          };
          const localInfo = { name: name, email: email };
          localStorage.setItem("user", JSON.stringify(localInfo));

          axiosPublic.post("/users", userInfo).then((res) => {
               // console.log("asdad",res.data.role);
               if (res.data.insertedId) {
                    if (res.data.role === "House Owner") {
                         navigate("/dashboard/addHouse");
                    } else {
                         navigate("/");
                    }
                    console.log("user added successfully in the database");

                    Swal.fire({
                         title: "Good job!",
                         text: "Sign up successfully!",
                         icon: "success",
                    });
               }
          });
          // navigate(location?.state ? location.state : "/");
          navigate(from, { replace: true });

          form.reset();
     };
     return (
          <div className="dark-bg min-h-screen py-5 md:py-10">
               <WebsiteTitle title={"SignUp Page"}></WebsiteTitle>
               <div className="relative light-bg border text-white w-4/5 md:w-1/2 lg:w-1/3 mx-auto p-5 rounded-xl">
                    <p className="text-3xl font-bold mb-6 text-center mt-5">
                         Sign Up Page
                    </p>
                    <Link to="/">
                         <button className="btn login-btn absolute top-0 left-0">
                              <MdNavigateBefore />
                              Home
                         </button>
                    </Link>
                    <form onSubmit={handleRegister} className="text-white">
                         {/* name */}
                         <div className="form-control">
                              <label className="label">
                                   <span className="">Name</span>
                              </label>
                              <input
                                   type="text"
                                   name="name"
                                   placeholder="Name"
                                   className="input input-bordered text-black"
                                   required
                              />
                         </div>
                         {/* photo */}
                         <div className="form-control">
                              <label className="label">
                                   <span className="">Photo URL</span>
                              </label>
                              <input
                                   type="text"
                                   name="photo"
                                   placeholder="Photo URL"
                                   className="input input-bordered text-black"
                                   required
                              />
                         </div>
                         {/* Phone Number */}
                         <div className="form-control">
                              <label className="label">
                                   <span className="">Phone Number</span>
                              </label>
                              <input
                                   type="text"
                                   name="phone"
                                   placeholder="Phone Number"
                                   className="input input-bordered text-black"
                                   required
                              />
                         </div>
                         {/* User Role */}
                         <div className="form-control w-full">
                              <label className="label">
                                   <span className="">User Category</span>
                              </label>
                              <select
                                   name="role"
                                   className="select select-bordered w-full text-black"
                              >
                                   <option value="owner">House Owner</option>
                                   <option value="renter">House Renter</option>
                              </select>
                         </div>
                         {/* Email */}
                         <div className="form-control">
                              <label className="label">
                                   <span className="">Email</span>
                              </label>
                              <input
                                   type="text"
                                   name="email"
                                   placeholder="Email"
                                   className="input input-bordered text-black"
                                   required
                              />
                         </div>
                         {/* Password */}
                         <div className="form-control relative">
                              <label className="label">
                                   <span className="">Password</span>
                              </label>
                              <input
                                   type={showPassword ? "text" : "password"}
                                   name="password"
                                   placeholder="Password"
                                   className="input input-bordered text-black"
                                   required
                              />

                              <span
                                   className="text-xl absolute top-[60%] right-4 text-black"
                                   onClick={() =>
                                        setShowPassword(!showPassword)
                                   }
                              >
                                   {showPassword ? (
                                        <FiEye> </FiEye>
                                   ) : (
                                        <FiEyeOff></FiEyeOff>
                                   )}
                              </span>
                         </div>
                         {/* term policy */}
                         <div className="form-control">
                              <div className="flex items-center gap-2 mt-2">
                                   <input
                                        type="checkbox"
                                        name="terms"
                                        id=""
                                        required
                                   />
                                   <p>
                                        Please accept our
                                        <a
                                             className="hover:underline hover:text-red-500"
                                             href="#"
                                        >
                                             terms and conditions
                                        </a>
                                   </p>
                              </div>
                         </div>
                         <h3>
                              {errorMessage && (
                                   <p className="text-red-600 pt-1">
                                        {errorMessage}
                                   </p>
                              )}
                         </h3>
                         <div className="form-control mt-6">
                              <button className="btn dark-bg hover:bg-[#2a2c39] text-white">
                                   Sign Up
                              </button>
                         </div>
                    </form>
                    {/* <div className="divider divider-info">OR</div>
                    <div className="">
                         <SocialLogin></SocialLogin>
                    </div> */}
                    <p className="text-center py-4">
                         Already Have An Account ?
                         <Link
                              className="text-red-500 font-bold hover:underline ml-1"
                              to="/login"
                         >
                              Login
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default RegistrationPage;
