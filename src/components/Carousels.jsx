"use client";
import React from "react";
import autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { profile } from "@/utils/data";

const Carousels = () => {
  return (
    <div className="relative">
      <Carousel
        plugins={[
          autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="ml-0 h-[30vh] md:h-[80vh]">
          {profile.map((item, index) => (
            <CarouselItem
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
              className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none"
            >
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] bg-black opacity-40"></div>
              <div className="p-1 h-[50vh]">
                <Card className="bg-transparent border-none">
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="h-[40vh] md:h-[60vh] flex lg:justify-center items-center relative">
                      <p className="text-white text-sm md:text-4xl text-center w-10/12 md:w-8/12">
                        <span>{item.text}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousels;
