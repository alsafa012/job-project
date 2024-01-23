import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
     const [userEmail, setUserEmail] = useState("");
     const axiosPublic = useAxiosPublic();

     useEffect(() => {
          const localUserInfo = JSON.parse(localStorage.getItem("user"));
          console.log(localUserInfo);
          if (localUserInfo) {
               setUserEmail(localUserInfo.email);
          }
     }, []);

     const { data: users = [], isLoading } = useQuery({
          queryKey: ["users", userEmail],
          queryFn: async () => {
               const res = await axiosPublic.get(`/users/${userEmail}`);
               return res.data;
          },
     });
     return [users, isLoading];
};

export default useUser;
