"use client"

import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const autoplay = Autoplay({ delay: 2000 });

export default function CarouselWrapper() {
 return <div>
    <Carousel   opts={{
    align: "start",
    loop: true,
    }}
    plugins={[autoplay]}
    className="mx-auto w-100 h-100" >
    
    <CarouselContent className="ml-4">
    <CarouselItem className="basis-1/3 pl-1 ">1</CarouselItem>
    <CarouselItem className="basis-1/3 pl-1" >eee</CarouselItem>
    <CarouselItem className="basis-1/3 pl-1">Brian</CarouselItem>
    <CarouselItem className="basis-1/3 pl-1">bais</CarouselItem>
    <CarouselItem className="basis-1/3 pl-1">Wei-en</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>
}