import axiosInstance from "@/config/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoryList = () => {
  return useQuery<string[]>({
    queryKey: ["get-category-list"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/products/category-list`);
      return data;
    },
  });
};
