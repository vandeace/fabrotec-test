import axiosInstance from "@/config/api";
import { TProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProductDetail = (id: string) => {
  return useQuery<TProduct>({
    queryKey: ["get-product-detail", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/product/${id}`);
      return data;
    },
  });
};
