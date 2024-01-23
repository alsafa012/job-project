import React from "react";
import useAxiosPublic from "../../../Components/hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ShowOwnerHouseList from "./ShowOwnerHouseList";

const OwnerHouseList = () => {
     const axiosPublic = useAxiosPublic();
     const { data: allHouseList = [], refetch } = useQuery({
          queryKey: ["allHouseList"],
          queryFn: async () => {
               const res = await axiosPublic.get("/ownerCollections");
               return res.data;
          },
     });
     console.log("allHouseList", allHouseList);
     return (
          <div>
               OwnerHouseList
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl">
                    {allHouseList.map((list) => (
                         <ShowOwnerHouseList
                              key={list._id}
                              data={list}
                         ></ShowOwnerHouseList>
                    ))}
               </div>
          </div>
     );
};
export default OwnerHouseList;
