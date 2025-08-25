import { Main } from "./components/main";
import { Hero } from "./components/hero";
import { Msg } from "./components/secaoMsg";
import { CarouselSize } from "./components/carrousel";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Msg />
      <CarouselSize />
    </Main>
  );
}
