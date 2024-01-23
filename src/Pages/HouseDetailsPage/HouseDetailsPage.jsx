import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import CountSection from "../../Components/HomePageComponents/CountSection/CountSection";
import CountDown from "../../Shared/CountDown/CountDown";

const HouseDetailsPage = () => {
     const houseDetails = useLoaderData();
     // console.log(houseDetails);
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
                         <button className="btn primary-btn w-full my-3">Booked here</button>
                    </div>
               </Container>
          </div>
     );
};

export default HouseDetailsPage;
