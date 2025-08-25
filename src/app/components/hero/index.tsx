import styles from "./hero.module.scss";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { BtnHero } from "../buttonHero";
import Image from "next/image";

import Logo from "@/assets/logoDourado.png";

export function Hero() {
  return (
    <div className={styles.content}>
      <div className={styles.contentIcons}>
        <FaWhatsapp />
        <FaInstagram />
        <FaFacebook />
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
