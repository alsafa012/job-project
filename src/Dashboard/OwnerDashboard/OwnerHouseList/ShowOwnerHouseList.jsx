import React from 'react';

const ShowOwnerHouseList = ({list}) => {
     return (
          <div>
          <div className="bg-base-100 shadow-xl rounded-lg">
               {/* <figure> */}
               <img
                    className="w-full h-[200px] flex justify-center mb-3 rounded-t-lg"
                    src={image}
                    alt="Shoes"
               />
               {/* </figure> */}
               <div className="text-lg px-2 font-medium flex flex-col">
                    <div className="flex-grow h-[200px]">
                         <h2 className="">Contest-Name: {name}</h2>
                    <p><small className="font-semibold text-blue-400">#{tag}</small></p>
                    <p>Total Participants: {participants} persons</p>
                    {/* <p>Entry Fee: ${price}</p> */}
                    {/* <p>Prize Money: ${prizeMoney}</p> */}
                    <p>description: {description}...</p>
                    </div>
                    {/* <p className="text-red-400">Note: {instruction}</p> */}
                    <div className="text-center">
                         <Link to={`/details/${_id}`}>
                              <button className="btn red w-full my-3">
                                   Details
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     </div>
     );
};

export default ShowOwnerHouseList;