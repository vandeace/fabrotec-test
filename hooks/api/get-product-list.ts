import axiosInstance from "@/config/api";
import { TProduct, TProductFilter } from "@/types/product";
import { TPaginatedRequest, TResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetProductList = (
  params: TPaginatedRequest<TProductFilter>
) => {
  return useQuery<TResponse<TProduct>>({
    queryKey: ["get-product-list", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/products${
          !!params.filter?.category ? `/category/${params.filter.category}` : ""
        }`,
        {
          params: {
            limit: params.limit,
            skip: params.limit * params.skip,
            ...params.sort,
          },
        }
      );
      return data;
    },
  });
};
