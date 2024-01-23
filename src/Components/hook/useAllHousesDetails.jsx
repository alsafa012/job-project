import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useAllHousesDetails = () => {
     const axiosPublic = useAxiosPublic();
     const { data: allHouseList = [],refetch } = useQuery({
          queryKey: ["allHouseList"],
          queryFn: async () => {
               const res = await axiosPublic.get("/ownerCollections");
               return res.data;
          },
     });
     return [allHouseList,refetch];
};

export default useAllHousesDetails;