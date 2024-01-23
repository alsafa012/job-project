import { useEffect, useState } from "react";
import ShowOwnerHouseList from "./ShowOwnerHouseList";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";
import useAllHousesDetails from "../../../Components/hook/useAllHousesDetails";
const OwnerHouseList = () => {
     const [userEmail, setUserEmail] = useState("");
     const [allHouse, setAllHouse] = useState([]);
     const [allHouseList , refetch] = useAllHousesDetails();
     console.log("allhouers", allHouse);
     console.log(allHouseList);
     console.log("userEmail", userEmail);
     useEffect(() => {
          const userInfoFromLocalStorage = JSON.parse(
               localStorage.getItem("user")
          );
          if (userInfoFromLocalStorage) {
               setUserEmail(userInfoFromLocalStorage.email);
               // setUserName(userInfoFromLocalStorage.name);
          }
          const filterEmail = allHouseList.filter(
               (list) => list?.email === userEmail
          );
          setAllHouse(filterEmail);
          // refetch()
     }, [allHouseList,userEmail]);
     return (
          <div>
               <div className="">
                    {allHouse.length === 0 ? (
                         <div className="min-h-screen flex justify-center flex-col">
                              <p className="text-3xl text-red-400 font-bold text-center">
                                   You have not Added any House yet..!
                              </p>
                              <Link to="/dashboard/addHouse">
                                   <button className="btn red flex justify-center mx-auto my-5">
                                        click here for Add House
                                        <span className="text-2xl">
                                             <GiClick />
                                        </span>
                                   </button>
                              </Link>
                         </div>
                    ) : (
                         <div>
                              <SectionTitle
                                   subHeading={"Total House List"}
                              ></SectionTitle>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl p-5">
                                   {allHouse.map((list) => (
                                        <ShowOwnerHouseList
                                             key={list._id}
                                             houseDetails={list}
                                        ></ShowOwnerHouseList>
                                   ))}
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
};
export default OwnerHouseList;
