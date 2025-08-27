import { Main } from "./components/main";
import { HeroMobile } from "./components/mobile/heroMobile";
import { MsgMobile } from "./components/mobile/secaoMsg";
import { CarouselPlugin } from "./components/carrousel";
import { Hero } from "./components/dasktop/hero";
import { MsgSecao } from "./components/dasktop/msgSecao";

export default function Home() {
  return (
    <Main>
      <HeroMobile />
      <Hero />
      <MsgMobile />
      <MsgSecao />
      <CarouselPlugin />
    </Main>
  );
}
