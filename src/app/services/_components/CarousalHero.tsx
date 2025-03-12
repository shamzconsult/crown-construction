"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
    { src: "/image/services-hero.jpg", text: "Building the Future with Excellence" },
    { src: "/image/service-eng5.jpg", text: "Innovative Engineering Solutions" },
    { src: "/image/service-eng2.webp", text: "Reliable and Efficient Construction" },
    { src: "/image/services-eng2.jpg", text: "Precision and Quality in Every Project" },
    { src: "/image/services-eng1.webp", text: "Transforming Visions into Reality" },
  ];
  
export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="relative w-full overflow-hidden"> 
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className="-mt-6">
          {images.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div className="p-0">
                <Card className="relative overflow-hidden rounded-none border-0 shadow-none">
                  <CardContent className="relative w-full h-[500px] p-0">
                    {/* Image */}
                    <img
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-65"></div>
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-4xl lg:text-6xl font-bold">
                      {item.text}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2" />
      </Carousel>
    </div>
  );
}
