import axios from "axios";

const axiosPublic = axios.create({
     baseURL: "https://job-project-server-iota.vercel.app"
})
const useAxiosPublic = () => {
     return axiosPublic;
};

export default useAxiosPublic;