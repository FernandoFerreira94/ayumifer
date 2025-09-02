import Image from "next/image";

import { StaticImageData } from "next/image";

export function CardService({
  text,
  imgSrc,
}: {
  text: string;
  imgSrc?: string | StaticImageData;
}) {
  return (
    <div className="w-full  sm:w-[400px] 3xl:w-[500px]  max-sm:w-full flex flex-col items-center   rounded-xl  bg-white/40 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      {" "}
      {imgSrc && (
        <Image
          data-aos="zoom-in"
          src={imgSrc}
          alt={text}
          width={500}
          height={500}
          priority
          quality={100}
          className="object-cover w-full h-full rounded-xl shadow-lg  max-sm:w-[180px] brightness-75"
        />
      )}
      <p
        className=" h-16 flex items-center justify-center  text-lg font-semibold max-sm:text-base text-center"
        style={{ color: "#A7884A" }}
      >
        {text}
      </p>
    </div>
  );
}
