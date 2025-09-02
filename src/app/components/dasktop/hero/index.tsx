"use client";
import styles from "./hero.module.scss";
import Image from "next/image";
import Logo from "@/assets/logo borboleta.png";
import LogoHero from "@/assets/logoDasktop.png";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export function Hero() {
  return (
    <main className={styles.contentHero} id="home">
      {/* Header com navegação */}
      <header className={styles.contentHeader}>
        <Image src={Logo} alt="logo" width={60} height={60} />
        <nav className={styles.navHEader}>
          <ScrollLink
            to="home"
            className={styles.link}
            smooth={true}
            duration={500}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className={styles.link}
            smooth={true}
            duration={500}
          >
            Sobre
          </ScrollLink>
          <ScrollLink
            to="service"
            className={styles.link}
            smooth={true}
            duration={500}
          >
            Serviços
          </ScrollLink>
          <ScrollLink
            to="studio"
            className={styles.link}
            smooth={true}
            duration={500}
          >
            Estúdio
          </ScrollLink>
          <ScrollLink
            to="footer"
            className={styles.link}
            smooth={true}
            duration={500}
          >
            Contato
          </ScrollLink>
          <Link
            target="_blank"
            href="https://wa.me/5512991024918"
            className="flex items-center gap-2 border-2 border-transparent bg-[#bfa641] text-gray-900 px-4 py-1 rounded-full transition duration-700 hover:bg-black/70 hover:border-[#bfa641] hover:text-[#bfa641]"
          >
            <FaWhatsapp size={22} /> Agendar um horário
          </Link>
        </nav>
      </header>

      {/* Hero principal */}
      <div className="container mx-auto h-[450px] px-40 py-[100px] relative">
        <Image
          src={LogoHero}
          alt="logo"
          width={500}
          height={500}
          quality={100}
          priority
          className="absolute top-13 right-36"
        />
      </div>

      {/* Frase de impacto */}
      <div className="w-full flex justify-center">
        <p className="text-white/60 text-xl italic">
          “Cuidar das unhas é mais do que estética, é um gesto de amor-próprio”
        </p>
      </div>
    </main>
  );
}
