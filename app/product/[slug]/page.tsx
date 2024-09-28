"use client";
import { useGetProductDetail } from "@/hooks/api/get-product-detail";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, isFetching } = useGetProductDetail(params.slug ?? "");
  if (isFetching) {
    return <div>loading product....</div>;
  }
  return (
    <div className="flex flex-col max-w-2xl mx-auto p-8 gap-y-4">
      <Link href="/" className="flex items-center gap-x-2">
        <ArrowLeftIcon /> back
      </Link>
      <h1 className="text-black text-4xl">{data?.title}</h1>
      <Carousel>
        <CarouselContent>
          {data?.images?.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={image}
                alt="image"
                width={400}
                height={400}
                className=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h2 className="text-2xl">${data?.price}</h2>
      <div className="flex flex-row gap-3">
        {data?.tags?.map((tag) => (
          <Badge variant="outline" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
      <p>{data?.description}</p>
    </div>
  );
};

export default Page;
