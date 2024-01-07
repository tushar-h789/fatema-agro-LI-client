import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://fatema-agro-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
