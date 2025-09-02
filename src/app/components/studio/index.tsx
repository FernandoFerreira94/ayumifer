import Image from "next/image";
import { Paragrafo } from "../paragrafo";
import Title from "../title";
import imgStudio1 from "@/assets/studio-1.jpg";
import imgStudio2 from "@/assets/studio-2.jpg";
import imgStudio3 from "@/assets/studio-3.jpg";
import imgStudio4 from "@/assets/studio-4.jpg";
import imgStudio5 from "@/assets/studio-5.jpg";

export function Studio() {
  return (
    <section className="w-full flex flex-col items-center  mb-8" id="studio">
      <Title text="Espaço estudio" />
      <article className="w-full mt-12 bg-white py-8 shadow-xl text-white flex flex-col items-center justify-center gap-4">
        <div className="  container py-6 mx-auto  max-sm:w-full  max-sm:px-8  flex flex-col items-center justify-center gap-4 text-center ">
          <Paragrafo className="text-center max-sm:text-justify">
            No <strong>Studio Ayumifer</strong> , criamos um ambiente acolhedor
            e elegante para que cada cliente se sinta <strong>especial</strong>{" "}
            . <br /> Nosso espaço para design de unhas é moderno e funcional,
            com poltronas e sofás confortáveis para você relaxar enquanto cuida
            de si.
            <br /> Oferecemos café, bolachas e água gelada no balcão, além de um
            espelho amplo que valoriza sua beleza e a atmosfera do local. <br />{" "}
            O ar-condicionado garante o clima ideal. <br /> Localizado em uma
            área de fácil acesso, o <strong>Studio Ayumifer</strong> é mais do
            que um lugar para se embelezar — é um refúgio de bem-estar e carinho
            pensado para você.
          </Paragrafo>
        </div>
        <div className="container mx-auto grid grid-cols-2 lg:flex gap-4 justify-center max-sm:px-4">
          {[imgStudio1, imgStudio2, imgStudio3, imgStudio4, imgStudio5].map(
            (img, i) => (
              <div
                key={i}
                className={`relative ${
                  i === 4 ? "rounded-xl max-sm:hidden" : ""
                } shadow-lg`}
              >
                <div className="rounded-xl p-[2px] border-2 border-[#A7884A]">
                  <Image
                    src={img}
                    alt="studio"
                    width={300}
                    height={300}
                    quality={100}
                    priority
                    className="object-cover rounded-xl shadow-xl w-full h-auto"
                    data-aos="fade-up"
                  />
                </div>

                {/* Borda interna responsiva */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none rounded-xl">
                  <div className="w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-xl border-2 border-[#A7884A]" />
                </div>
              </div>
            )
          )}
        </div>
      </article>
    </section>
  );
}
