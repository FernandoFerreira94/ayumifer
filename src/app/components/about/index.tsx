import { Paragrafo } from "../paragrafo";
import Title from "../title";

export function About() {
  return (
    <section className="w-full flex flex-col items-center  mb-8" id="about">
      <Title text="Sobre mim" />
      <article className="w-full mt-12 bg-[#A7884A] py-8 shadow-xl text-white">
        <div className="  container py-6 mx-auto  max-sm:w-full  max-sm:px-8 text-justify">
          <Paragrafo className="text-white">
            Sou <strong>Fernanda Ayumi</strong> , tenho 22 anos e há mais de 4
            anos atuo como{" "}
            <strong>designer de unhas especializada em fibra de vidro</strong> .
            Desde o meu primeiro curso, descobri que trabalhar com unhas ia
            muito além de estética: é sobre transformar autoestima e fazer com
            que cada cliente se sinta{" "}
            <strong>única, poderosa e confiante</strong> .
          </Paragrafo>
          <br />
          <Paragrafo className="text-white">
            Ser descendente de japoneses me ensinou a importância da{" "}
            <strong>
              {" "}
              precisão, delicadeza e atenção aos mínimos detalhes
            </strong>{" "}
            — e levo isso para cada trabalho que faço. No{" "}
            <strong>Studio Ayumifer</strong> , meu objetivo é que você se sinta
            acolhida, respeitada e saindo daqui com a sensação de que suas unhas
            são a sua melhor versão.
          </Paragrafo>
          <br />
          <Paragrafo className="text-white">
            Sempre busco atualização, aprendendo novas técnicas e tendências,
            para que você tenha não só unhas lindas, mas também{" "}
            <strong>resistentes, saudáveis e feitas com muito carinho</strong>.
          </Paragrafo>
        </div>
      </article>
    </section>
  );
}
