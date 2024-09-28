"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { useGetProductList } from "@/hooks/api/get-product-list";
import Link from "next/link";
import PaginationProductList from "./pagination";
import useMutableSearchParams from "@/hooks/utils/param";
import { Button } from "@/components/ui/button";
const ProductList = () => {
  const searchParam = useMutableSearchParams();
  const priceSort = searchParam.get("price");
  const { data, isFetching } = useGetProductList({
    filter: {
      category: searchParam.get("category") ?? undefined,
    },
    limit: 12,
    sort: !!priceSort
      ? {
          order: priceSort,
          sortBy: "price",
        }
      : undefined,
    skip: !!searchParam.get("page") ? Number(searchParam.get("page")) : 0,
  });

  if (isFetching) {
    return <div>Loading Product List....</div>;
  }

  const lastPage = Math.round((data?.total ?? 0) / (data?.limit ?? 0));

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row gap-x-4">
        {searchParam.has("category") && (
          <Button
            variant="destructive"
            className="w-[200px]"
            onClick={() => {
              searchParam.delete("category");
            }}
          >
            clear category filter
          </Button>
        )}
        {searchParam.has("price") && (
          <Button
            variant="destructive"
            className="w-[200px]"
            onClick={() => {
              searchParam.delete("price");
            }}
          >
            clear price sort
          </Button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data?.products.map((item) => (
          <Link href={`product/${item.id}`} key={item.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-center items-center">
                  <Image
                    src={item.thumbnail}
                    alt="image"
                    width={200}
                    height={200}
                    className="max-w-[200px] max-h-[200px]"
                  />
                </CardTitle>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      <PaginationProductList lastPage={lastPage} />
    </div>
  );
};

export default ProductList;
