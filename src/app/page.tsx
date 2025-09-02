import { Main } from "./components/main";
import { HeroMobile } from "./components/mobile/heroMobile";
import { MsgMobile } from "./components/mobile/secaoMsg";
import { CarouselPlugin } from "./components/carrousel";
import { Hero } from "./components/dasktop/hero";
import { MsgSecao } from "./components/dasktop/msgSecao";
import { About } from "./components/about";
import { Service } from "./components/service";
import { Studio } from "./components/studio";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <Main>
      <HeroMobile />
      <Hero />
      <MsgMobile />
      <MsgSecao />
      <CarouselPlugin />
      <About />
      <Service />
      <Studio />
      <Footer />
    </Main>
  );
}
