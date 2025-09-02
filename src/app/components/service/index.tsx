import Title from "../title";
import { CardService } from "../cardService";
import imgService1 from "@/assets/service-1.jpg";
import imgService2 from "@/assets/service-2.jpg";
import imgService3 from "@/assets/service-3.jpg";
import imgService4 from "@/assets/service-4.jpg";
import imgService5 from "@/assets/service-5.jpg";
import imgService6 from "@/assets/service-6.jpg";
import imgService7 from "@/assets/service-7.jpg";
import { Paragrafo } from "../paragrafo";

export function Service() {
  return (
    <section className="w-full flex flex-col items-center mb-8" id="service">
      <Title text="Serviços" />
      <article className="w-full  py-8">
        <div className="container py-6 px-6 mx-auto grid grid-cols-2 sm:grid-cols-3 gap-12 max-sm:gap-6 justify-center ">
          <CardService text="Alogamento de unhas" imgSrc={imgService1} />
          <CardService text="Manutenção" imgSrc={imgService2} />
          <CardService text="Banho em gel" imgSrc={imgService3} />
          <CardService text="Blindagem" imgSrc={imgService4} />
          <CardService text="Reposição de unhas" imgSrc={imgService5} />
          <CardService text="Decoração encapsulada" imgSrc={imgService6} />
          <div className="max-sm:hidden"></div>
          <CardService text="Remoção" imgSrc={imgService7} />
        </div>
        <Paragrafo className="text-center mt-12 text-shadow-md max-sm:text-sm">
          {" "}
          Qualquer procedimento inclui esmaltação em gel
        </Paragrafo>
      </article>
    </section>
  );
}
