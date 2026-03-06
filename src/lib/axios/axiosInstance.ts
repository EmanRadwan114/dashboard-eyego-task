import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DUMMMY_JSON_BASE_URL,
});
