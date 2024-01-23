import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Provider/AuthProvider";
import WebsiteTitle from "../../Shared/WebsiteTitle/WebsiteTitle";
// import SocialLogin from "../../Components/SocialLogins/SocialLogin";
import { MdNavigateBefore } from "react-icons/md";
// import { PiNavigationArrowDuotone } from "react-icons/pi";
// <PiNavigationArrowDuotone />
const LoginPage = () => {
     // const from = location?.state?.from?.pathname || "/";
     const [showPassword, setShowPassword] = useState(false);
     // const { user, userSignIn } = useContext(AuthContext);
     const [errorMessage, setErrorMessage] = useState(false);
     const location = useLocation();
     const navigate = useNavigate();
     const from = location?.state?.from?.pathname || "/";
     const handleLogin = (e) => {
          if (user) {
               return Swal.fire({
                    title: "Error!",
                    text: "user already logged in",
                    icon: "error",
                    confirmButtonText: "Cool",
               });
          }
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);
          userSignIn(email, password)
               .then((result) => {
                    // navigate(location?.state ? location.state : "/");
                    console.log(result.user);
                    Swal.fire(
                         "Good job!",
                         "User login successfully",
                         "success"
                    );
                    navigate(from, { replace: true });

                    e.target.email.value = "";
                    e.target.password.value = "";
               })
               .catch((error) => {
                    console.log(error);
                    setErrorMessage(
                         "User login failed..! Invalid email or password"
                    );
               });
     };
     return (
          <div className="dark-bg min-h-screen py-5 md:py-10">
               <WebsiteTitle title={"Login Page"}></WebsiteTitle>
               {/* <PageTitle title="Login"></PageTitle> */}
               <div className="relative light-bg border text-white w-4/5 md:w-1/2 lg:w-1/3 mx-auto p-5 rounded-xl">
                    <p className="text-3xl font-bold mb-6 text-center mt-5">
                         Login Here..
                    </p>
                    <Link to="/">
                         <button className="btn login-btn absolute top-0 left-0">
                              <MdNavigateBefore />
                              Home
                         </button>
                    </Link>
                    <form onSubmit={handleLogin} className="text-white">
                         <div className="form-control">
                              <label className="label">
                                   <span className="">Email</span>
                              </label>
                              <input
                                   type="text"
                                   name="email"
                                   placeholder="Email"
                                   className="input input-bordered text-black font-medium"
                                   required
                              />
                         </div>
                         <div className="form-control relative">
                              <label className="label">
                                   <span className="">Password</span>
                              </label>
                              <input
                                   type={showPassword ? "text" : "password"}
                                   name="password"
                                   placeholder="Password"
                                   className="input input-bordered text-black font-medium"
                                   required
                              />
                              <label className="label mt-3">
                                   <a href="#" className="-alt link link-hover">
                                        Forgot password?
                                   </a>
                              </label>
                              <span
                                   className="text-xl absolute top-[40%] right-4 text-black font-medium"
                                   onClick={() =>
                                        setShowPassword(!showPassword)
                                   }
                              >
                                   {showPassword ? (
                                        <FiEye></FiEye>
                                   ) : (
                                        <FiEyeOff></FiEyeOff>
                                   )}
                              </span>
                         </div>
                         <h3>
                              {errorMessage && (
                                   <p className="text-red-600 pt-1">
                                        {errorMessage}
                                   </p>
                              )}
                         </h3>
                         <div className="form-control mt-6">
                              <button className="btn text-white dark-bg hover:bg-[#2a2c39]">
                                   Login
                              </button>
                         </div>

                         {/* <div className="form-control w-[300px] mx-auto text-center mt-6">
                              <button
                                   onClick={handleGoogleSignIn}
                                   type="button"
                                   className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg btn inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                              >
                                   <svg
                                        className="w-4 h-4 mr-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 19"
                                   >
                                        <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                                   </svg>
                                   Sign in with Google
                              </button>
                         </div> */}
                    </form>
                    {/* <div className="divider divider-info">OR</div> */}
                    {/* <div className="divider w-4/5 md:w-1/3 mx-auto border">OR</div> */}
                    {/* <SocialLogin></SocialLogin> */}
                    <p className="text-center py-4">
                         Do not Have An Account ?
                         <Link
                              className="text-[#FF444A] font-bold hover:underline ml-1"
                              to="/registration"
                         >
                              Sign Up
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default LoginPage;


// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// // import swal from "sweetalert";
// import useUsersInfo from "../../Components/hook/useUsersInfo";
// import Swal from "sweetalert2";

// const Login = () => {
//      const [showPass, setShowPass] = useState(true);
//      const navigate = useNavigate();
//      const [allUsers] = useUsersInfo();

//      const {
//           register,
//           handleSubmit,
//           formState: { errors },
//      } = useForm();
//      const onSubmit = (data) => {
//           const userExists = allUsers.some((user) => user.email === data.email);

//           if (!userExists) {
//                Swal("Sorry!", "You have to registered first", "error");
//                return;
//           }
//           const loggedInUser = allUsers.find(
//                (user) => user.email === data.email
//           );
//           const localInfo = {
//                name: loggedInUser.name,
//                email: loggedInUser.email,
//           };
//           localStorage.setItem("user", JSON.stringify(localInfo));
//           Swal("Good job!", "User logged in successfully!", "success");
//           navigate("/");
//      };
//      return (
//           <>
//                <div className="bg-white dark:bg-gray-900">
//                     <div className="flex justify-center h-screen">
//                          <div
//                               className="hidden bg-cover lg:block lg:w-2/3"
//                               style={{
//                                    backgroundImage:
//                                         "url(https://i.ibb.co/SrNhcY8/24023256-realtor-02.jpg)",
//                               }}
//                          >
//                               <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
//                                    <div>
//                                         <h2 className="text-2xl font-bold text-white sm:text-3xl">
//                                              House Hunter
//                                         </h2>

//                                         <p className="max-w-xl mt-3 text-gray-300">
//                                              Unlock your dream home. Sign in to
//                                              access exclusive house rental
//                                              listings and find your perfect
//                                              space with ease.
//                                         </p>
//                                    </div>
//                               </div>
//                          </div>

//                          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
//                               <div className="flex-1">
//                                    <div className="text-center">
//                                         <p className="mt-3 text-gray-500 dark:text-gray-300">
//                                              Sign in to access your account
//                                         </p>
//                                    </div>

//                                    <div className="mt-8">
//                                         <form onSubmit={handleSubmit(onSubmit)}>
//                                              <div>
//                                                   <label
//                                                        htmlFor="email"
//                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
//                                                   >
//                                                        Email Address
//                                                   </label>
//                                                   <input
//                                                        type="email"
//                                                        name="email"
//                                                        id="email"
//                                                        {...register("email", {
//                                                             required: true,
//                                                        })}
//                                                        placeholder="example@example.com"
//                                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                                                   />
//                                                   {errors.email && (
//                                                        <span className="text-red-500">
//                                                             Your email is
//                                                             required
//                                                        </span>
//                                                   )}
//                                              </div>

//                                              <div className="mt-6 relative">
//                                                   <div className="flex justify-between mb-2">
//                                                        <label
//                                                             htmlFor="password"
//                                                             className="text-sm text-gray-600 dark:text-gray-200"
//                                                        >
//                                                             Password
//                                                        </label>
//                                                        <a className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
//                                                             Forgot password?
//                                                        </a>
//                                                   </div>

//                                                   <input
//                                                        type={
//                                                             showPass
//                                                                  ? "password"
//                                                                  : "text"
//                                                        }
//                                                        name="password"
//                                                        id="password"
//                                                        placeholder="Your Password"
//                                                        {...register(
//                                                             "password",
//                                                             { required: true }
//                                                        )}
//                                                        className="block  w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                                                   />
//                                                   {errors.password && (
//                                                        <span className="text-red-500">
//                                                             Your password is
//                                                             required
//                                                        </span>
//                                                   )}
//                                                   <p
//                                                        onClick={() =>
//                                                             setShowPass(
//                                                                  !showPass
//                                                             )
//                                                        }
//                                                        className="absolute top-9 right-3 hover:cursor-pointer"
//                                                   >
//                                                        {showPass
//                                                             ? "Show"
//                                                             : "Hide"}
//                                                   </p>
//                                              </div>

//                                              <div className="mt-6">
//                                                   <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//                                                        Log in
//                                                   </button>
//                                              </div>
//                                         </form>

//                                         <p className="mt-6 text-sm text-center text-gray-400">
//                                              Don&#x27;t have an account yet?{" "}
//                                              <Link
//                                                   to={"/signUp"}
//                                                   className="text-blue-500 focus:outline-none focus:underline hover:underline"
//                                              >
//                                                   Sign up
//                                              </Link>
//                                              .
//                                         </p>
//                                    </div>
//                               </div>
//                          </div>
//                     </div>
//                </div>
//           </>
//      );
// };

// export default Login;
