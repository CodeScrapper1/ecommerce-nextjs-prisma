import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageList = ({ images }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-40 h-40 max-w-xs relative"
    >
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index}>
            <div>
              <img src={image} className="w-40 h-40 object-contain" alt="" />
              <div></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 h-7 w-7 bg-slate-300" />
      <CarouselNext className="absolute right-2 h-7 w-7 bg-slate-300" />
    </Carousel>
  );
};

export default ImageList;
