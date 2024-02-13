import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../Components/hook/useUser";

const ShowAllHousePage = ({ house }) => {
     const [userEmail, setUserEmail] = useState("");
     const [userName, setUserName] = useState("");
     console.log("from local storage", userEmail);
     // console.log("from local storage",userName);
     const navigate = useNavigate();
     // const [users, refetch] = useUser();
     // console.log(users);

     useEffect(() => {
          const userInfoFromLocalStorage = JSON.parse(
               localStorage.getItem("user")
          );
          if (userInfoFromLocalStorage) {
               setUserEmail(userInfoFromLocalStorage.email);
               setUserName(userInfoFromLocalStorage.name);
          }
     }, []);
     // const handleNavigate = () => {
     //      if (!userEmail) {
     //           navigate("/login");
     //      }
     // };
     const {
          _id,
          name,
          address,
          city,
          bedrooms,
          bathrooms,
          phone,
          roomSize,
          rentPerMonth,
          availability,
          description,
          image,
     } = house;
     return (
          <div>
               <div className="dark-bg rounded-lg">
                    {/* <figure> */}
                    <img
                         className="w-full h-[200px] flex justify-center mb-3 rounded-t-lg hover:scale-5 transition"
                         src={image}
                         alt="Shoes"
                    />
                    {/* </figure> */}
                    <div className="text-lg px-2 font-medium flex flex-col">
                         <div className="flex-grow h-[200px] text-white">
                              <h2 className="">House-Owner: {name}</h2>
                              {/* <p>
                                   <small className="font-semibold text-blue-400">
                                        #{tag}
                                   </small>
                              </p> */}
                              <p>House Address: {address}</p>
                              <p>House Address: {address}</p>
                              <p>House-City: ${city}</p>
                              <p>Description: {description}...</p>
                         </div>
                         {/* <p className="text-red-400">Note: {instruction}</p> */}
                         <div className="text-center">
                              {!userEmail ? (
                                   <Link
                                       
                                        state={location?.pathname}
                                        to={'/login'}
                                   >
                                        <button className="btn primary-btn red w-full my-3">
                                             Details
                                        </button>
                                   </Link>
                              ) : (
                                   <Link
                                        state={location?.pathname}
                                        to={`/details/${_id}`}
                                   >
                                        <button className="btn primary-btn red w-full my-3">
                                             Details
                                        </button>
                                   </Link>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowAllHousePage;
