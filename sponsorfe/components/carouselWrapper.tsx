"use client"
import { ChevronRight, ChevronLeft } from 'lucide-react';
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
import { Button } from "./ui/button";

const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true,  });

export default function CarouselWrapper() {
 return (<div>
    <Carousel   opts={{
    align: "start",
    loop: true,
    }}
    plugins={[autoplay, ]}
    className="mx-auto w-7/10 h-full py-3"
>   
    <CarouselContent className="ml-4">
        <CarouselItem className="basis-1/3 pl-1" ><div className="flex aspect-square items-center justify-center bg-teal-600 rounded-xl ">1</div></CarouselItem>
        <CarouselItem className="basis-1/3 pl-1"><div className="flex aspect-square items-center justify-center ">Daven</div></CarouselItem>
        <CarouselItem className="basis-1/3 pl-1"><div className="flex aspect-square items-center justify-center bg-[rgb(114,11,152)]">Wei-en</div></CarouselItem>
        <CarouselItem className="basis-1/3 pl-1"><div className="flex aspect-square items-center justify-center ">Balls</div></CarouselItem>
    </CarouselContent>
    
        <CarouselPrevious size={'default'}>
        </CarouselPrevious>

        <CarouselNext variant={"destructive"}/>
  

    <CarouselNext />
  </Carousel>
</div>)
}