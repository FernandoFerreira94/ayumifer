"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; // 👈 Importa o componente de imagem do Next.js

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/assets/img1.png";
import img2 from "@/assets/Rectangle 9.png";
import img3 from "@/assets/Rectangle 10.png";
import img4 from "@/assets/Rectangle 11.png";
import img5 from "@/assets/Rectangle 12.png";
import img6 from "@/assets/img1.png";
import img7 from "@/assets/Rectangle 9.png";
import img8 from "@/assets/Rectangle 10.png";
import img9 from "@/assets/Rectangle 11.png";
import img10 from "@/assets/Rectangle 12.png";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full container"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {imgs.map((img, index) => (
          <CarouselItem key={index} className=" basis-full sm:basis-1/3">
            <Card className="w-full h-80  overflow-hidden ">
              <CardContent className="relative w-full h-full p-0">
                {" "}
                {/* remove padding interno */}
                <Image
                  src={img}
                  alt={`Imagem ${index + 1}`}
                  fill // 👈 ocupa todo o espaço do container
                  className="object-cover rounded-md"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 p-5 bg-white/50" />
      <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 p-5 bg-white/50" />
    </Carousel>
  );
}
