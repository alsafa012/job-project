import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useUsersInfo = () => {
     const axiosPublic = useAxiosPublic();
     const { data: allUsers = [],refetch } = useQuery({
          queryKey: ["allUsers"],
          queryFn: async () => {
               const res = await axiosPublic.get("/users");
               return res.data;
          },
     });
     return [allUsers,refetch];
};

export default useUsersInfo;