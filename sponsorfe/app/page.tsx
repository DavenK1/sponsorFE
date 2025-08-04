import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="text-center"> 
    <h1 className="p-5">View Rewards</h1>
    <h1 className="p-5">Partner With Us</h1>
    <Carousel>
    <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>eee</CarouselItem>
    <CarouselItem>...</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
    </div>
  );
}
