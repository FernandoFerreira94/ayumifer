"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; // 👈 Importa o componente de imagem do Next.js
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";
import img7 from "@/assets/7.png";
import img8 from "@/assets/8.png";
import img9 from "@/assets/9.png";
import img10 from "@/assets/10.png";
import img11 from "@/assets/11.png";
import img12 from "@/assets/12.png";

export function CarouselPlugin() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const imgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="container mx-auto 3xl:w-full 3xl:mx-auto mb-12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/3 3xl:basis-1/5"
          >
            <Card className="w-full h-[450px] overflow-hidden max-sm:h-[400px]">
              <CardContent className="relative w-full h-full p-0 brightness-75 transition duration-500 hover:brightness-100 max-sm:brightness-100">
                <Image
                  src={img}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                  quality={100}
                  priority
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
