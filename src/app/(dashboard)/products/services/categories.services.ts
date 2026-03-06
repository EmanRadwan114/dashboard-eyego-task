import { axiosInstance } from "@/lib/axios/axiosInstance";

export const getAllCategories = async () => {
  const response = await axiosInstance.get("/products/categories");
  return response.data;
};
