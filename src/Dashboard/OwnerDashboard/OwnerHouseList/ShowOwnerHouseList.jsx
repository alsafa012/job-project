import React from "react";
import { Link } from "react-router-dom";

const ShowOwnerHouseList = ({ houseDetails }) => {
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
          <div>
               <div className="dark-bg shadow-xl rounded-lg">
                    {/* <figure> */}
                    <img
                         className="w-full h-[200px] flex justify-center mb-3 rounded-t-lg"
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
                         {/* <div className="text-center">
                              <Link to={`/details/${_id}`}>
                                   <button className="btn primary-btn red w-full my-3">
                                        Details
                                   </button>
                              </Link>
                         </div> */}
                    </div>
               </div>
          </div>
     );
};

export default ShowOwnerHouseList;
