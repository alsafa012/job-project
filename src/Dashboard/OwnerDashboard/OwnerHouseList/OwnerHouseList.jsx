// import { useEffect, useState } from "react";
// import ShowOwnerHouseList from "./ShowOwnerHouseList";
// import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
// import { Link } from "react-router-dom";
// import { GiClick } from "react-icons/gi";
// import useAllHousesDetails from "../../../Components/hook/useAllHousesDetails";
// const OwnerHouseList = () => {
//      const [userEmail, setUserEmail] = useState("");
//      const [allHouse, setAllHouse] = useState([]);
//      const [allHouseList , refetch] = useAllHousesDetails();
//      console.log("allhouers", allHouse);
//      console.log(allHouseList);
//      console.log("userEmail", userEmail);
//      useEffect(() => {
//           const userInfoFromLocalStorage = JSON.parse(
//                localStorage.getItem("user")
//           );
//           if (userInfoFromLocalStorage) {
//                setUserEmail(userInfoFromLocalStorage.email);
//                // setUserName(userInfoFromLocalStorage.name);
//           }
//           const filterEmail = allHouseList.filter(
//                (list) => list?.email === userEmail
//           );
//           setAllHouse(filterEmail);
//           // refetch()
//      }, [allHouseList,userEmail]);
//      return (
//           <div>
//                <div className="">
//                     {allHouse.length === 0 ? (
//                          <div className="min-h-screen flex justify-center flex-col">
//                               <p className="text-3xl text-red-400 font-bold text-center">
//                                    You have not Added any House yet..!
//                               </p>
//                               <Link to="/dashboard/addHouse">
//                                    <button className="btn red flex justify-center mx-auto my-5">
//                                         click here for Add House
//                                         <span className="text-2xl">
//                                              <GiClick />
//                                         </span>
//                                    </button>
//                               </Link>
//                          </div>
//                     ) : (
//                          <div>
//                               <SectionTitle
//                                    subHeading={"Total House List"}
//                               ></SectionTitle>
//                               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl p-5">
//                                    {allHouse.map((list) => (
//                                         <ShowOwnerHouseList
//                                              key={list._id}
//                                              houseDetails={list}
//                                         ></ShowOwnerHouseList>
//                                    ))}
//                               </div>
//                          </div>
//                     )}
//                </div>
//           </div>
//      );
// };
// export default OwnerHouseList;
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../../Components/hook/useAxiosPublic";
import useAllHousesDetails from "../../../Components/hook/useAllHousesDetails";
import WebsiteTitle from "../../../Shared/WebsiteTitle/WebsiteTitle";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const OwnerHouseList = () => {
     const [userEmail, setUserEmail] = useState("");
     const [allHouse, setAllHouse] = useState([]);
     const axiosPublic = useAxiosPublic();
     const [allHouseList, refetch] = useAllHousesDetails();
     const location = useLocation();
     console.log(location);
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
     }, [allHouseList, userEmail]);
     const handleDelete = (id) => {
          console.log(id);
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!",
          }).then((result) => {
               if (result.isConfirmed) {
                    axiosPublic
                         .delete(`/ownerCollections/${id}`)
                         .then((res) => {
                              if (res.data.deletedCount > 0) {
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success",
                                   });
                                   refetch();
                              }

                              console.log(res.data);
                         });
               }
          });
     };
     return (
          <div>
               <div>
                    <WebsiteTitle
                         title={"Admin || Manage Houses"}
                    ></WebsiteTitle>
                    <div className="flex justify-evenly">
                         <SectionTitle
                              subHeading={`Total Houses: ${allHouse.length}`}
                         ></SectionTitle>
                    </div>
                    <div>
                         <div className="overflow-x-auto">
                              <table className="table">
                                   {/* head */}
                                   <thead>
                                        <tr className="font-medium text-white">
                                             <th></th>
                                             <th>Name</th>
                                             <th>Email</th>
                                             <th>Update</th>
                                             <th>Remove</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {allHouse.map((user, index) => (
                                             <tr
                                                  className="hover:bg-[#252734]"
                                                  key={user._id}
                                             >
                                                  <th>{index + 1}</th>
                                                  <td>{user.name}</td>
                                                  <td>{user.email}</td>
                                                  <td>
                                                       <Link state={location?.pathname} to={`/update/${user._id}`}>
                                                            <button className="btn primary-btn">
                                                                 Update
                                                            </button>
                                                       </Link>
                                                  </td>
                                                  <td>
                                                       <button
                                                            onClick={() =>
                                                                 handleDelete(
                                                                      user._id
                                                                 )
                                                            }
                                                            className="btn primary-btn"
                                                       >
                                                            Delete
                                                       </button>
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default OwnerHouseList;