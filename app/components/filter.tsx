"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useMutableSearchParams from "@/hooks/utils/param";
import { useGetCategoryList } from "@/hooks/api/get-product-category";

const Filter = () => {
  const searchParam = useMutableSearchParams();
  const { data } = useGetCategoryList();

  const valueCategory = searchParam.get("category");
  const priceSort = searchParam.get("price");
  return (
    <div className="grid grid-cols-2 py-4">
      <div className="flex flex-col gap-y-4">
        <Select
          value={!!valueCategory ? valueCategory : ""}
          onValueChange={(value) => {
            searchParam.set("category", value);
          }}
        >
          <SelectGroup>
            <SelectLabel>Filter Category</SelectLabel>
          </SelectGroup>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {data?.map((category, index) => (
              <SelectItem value={category} key={index} className="capitalize">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-y-4">
        <Select
          value={!!priceSort ? priceSort : ""}
          onValueChange={(value) => {
            searchParam.set("price", value);
          }}
        >
          <SelectGroup>
            <SelectLabel>Sort Price</SelectLabel>
          </SelectGroup>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">ASC</SelectItem>
            <SelectItem value="desc">DESC</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
