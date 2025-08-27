import styles from "./heroMobile.module.scss";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BtnHero } from "../../buttonHero";
import Image from "next/image";

import Logo from "@/assets/logoDourado.png";
import Link from "next/link";

export function HeroMobile() {
  return (
    <div className={styles.content}>
      <div className={styles.contentIcons}>
        <Link href="#" target="_blank" className={styles.linkIcon}>
          @ayumifer
          <FaInstagram scale={15} color="#bfa641" />
        </Link>
        <Link href="#" target="_blank" className={styles.linkIcon}>
          (12) 9 9999-9999
          <FaWhatsapp scale={15} color="#bfa641" />
        </Link>
      </div>
      <div className={styles.contentLogo}>
        <Image
          src={Logo}
          alt="logo"
          width={230}
          height={230}
          quality={100}
          priority
        />
      </div>
      <div className={styles.contentBtnHero}>
        <BtnHero>
          {" "}
          <FaWhatsapp /> Agendar um horário
        </BtnHero>
      </div>
    </div>
  );
}
