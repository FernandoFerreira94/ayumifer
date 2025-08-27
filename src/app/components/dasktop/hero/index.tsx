import styles from "./hero.module.scss";
import Image from "next/image";
import Logo from "@/assets/logo borboleta.png";
import LogoHero from "@/assets/logoDasktop.png";
import Link from "next/link";

export function Hero() {
  return (
    <main className={styles.contentHero}>
      <header className={styles.contentHeader}>
        <Image src={Logo} alt="logo" width={60} height={60} />
        <nav className={styles.navHEader}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/" className={styles.link}>
            Studio
          </Link>
          <Link href="/" className={styles.link}>
            Serviços
          </Link>
          <Link href="/" className={styles.link}>
            Contato
          </Link>
        </nav>
      </header>
      <div className="container mx-auto h-[450px] px-40 py-[100px] relative ">
        <Image
          src={LogoHero}
          alt="logo"
          width={500}
          height={500}
          quality={100}
          priority
          className="absolute top-12 right-36"
        />
      </div>
      <div className="w-full flex justify-center">
        <p className="text-white/60 text-xl italic">
          “Cuidar das unhas é mais do que estética, é um gesto de amor-próprio”
        </p>
      </div>
    </main>
  );
}
