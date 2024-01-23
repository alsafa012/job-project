import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import WebsiteTitle from '../../../Shared/WebsiteTitle/WebsiteTitle';
import useAllHousesDetails from '../../../Components/hook/useAllHousesDetails';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Components/hook/useAxiosPublic';

const OwnerManageBookings = () => {
     const [userEmail, setUserEmail] = useState("");
     const [allHouse, setAllHouse] = useState([]);
     const axiosPublic = useAxiosPublic();
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
     }, [allHouseList,userEmail])
     const handleDelete = (id) => {
          console.log(id);
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
             }).then((result) => {
               if (result.isConfirmed) {
                    axiosPublic.delete(`/ownerCollections/${id}`).then((res) => {
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
     }
     return (
          <div>
          <div>
               <WebsiteTitle title={"Admin || Manage Houses"}></WebsiteTitle>
               <div className="flex justify-evenly">
                    <SectionTitle subHeading={`Total Houses: ${allHouseList.length}`}></SectionTitle>
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
                                             <td>  <button
                                                       className="btn primary-btn"
                                                      
                                                  >
                                                       Update
                                                  </button></td>
                                             <td>
                                                  <button
                                                  onClick={()=>handleDelete(user._id)}
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

export default OwnerManageBookings;