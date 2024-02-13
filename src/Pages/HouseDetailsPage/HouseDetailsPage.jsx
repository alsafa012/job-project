import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import CountDown from "../../Shared/CountDown/CountDown";
import useUser from "../../Components/hook/useUser";
import Swal from "sweetalert2";

const HouseDetailsPage = () => {
     const houseDetails = useLoaderData();
     // console.log(houseDetails);
     const [users] = useUser();
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
     } = houseDetails;
     // time counter
     const SubmissiondeadLine = new Date(availability).getTime();
     const today = new Date().getTime();
     const difference = SubmissiondeadLine - today;
     // console.log(today);
     // console.log(SubmissiondeadLine);
     console.log(difference);
     const handleNotAvailable =()=>{
          Swal.fire({
               icon: "error",
               title: "Sorry..!",
               text: "Not Available Right Naw",
             });
     }
     return (
          <div className="light-bg">
               <Container>
                    <div className="pt-16 mb-10">
                         <img
                              className="w-full h-[50vh] object-fill"
                              src={image}
                              alt=""
                         />
                         <div className="font-bold text-lg mt-2 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 content-center text-center">
                              <p className="font-bold">House-Owner: {name}</p>
                              <p>
                                   House Address: {address} - {city}
                              </p>
                              <p>{bedrooms} Bedrooms</p>
                              <p>{bathrooms} Bathrooms</p>
                              <p>Contact Number: {phone}</p>
                              <p>Room Size: {roomSize}</p>
                              <p>Monthly House Rent: {rentPerMonth}</p>
                              <div>
                                   <CountDown
                                        availability={availability}
                                   ></CountDown>
                              </div>
                              <p>House Description: {description}</p>
                         </div>
                         {difference > 1 ? (
                              <div>
                                   {users.role === "owner" ? (
                                        <button className="btn primary-btn w-full my-3 pointer-events-none">
                                             An Owner cannot Booked
                                        </button>
                                   ) : (
                                        <button className="btn primary-btn w-full my-3">
                                             Booked here
                                        </button>
                                   )}
                              </div>
                         ) : (
                              <button onClick={handleNotAvailable} className="btn primary-btn w-full my-3">
                                   Not Available
                              </button>
                         )}
                    </div>
               </Container>
          </div>
     );
};

export default HouseDetailsPage;
