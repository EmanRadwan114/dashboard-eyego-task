import { axiosInstance } from "@/lib/axios/axiosInstance";

export const getProducts = async () => {
  const response = await axiosInstance.get("/products?limit=100");
  return response.data;
};
