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
        <Link
          href="https://www.instagram.com/ayumifernails/"
          target="_blank"
          className={styles.linkIcon}
        >
          <FaInstagram scale={15} color="#bfa641" />
          @ayumifer
        </Link>
        <Link
          href="https://wa.me/5512991024918"
          target="_blank"
          className={styles.linkIcon}
        >
          <FaWhatsapp scale={15} color="#bfa641" />
          (12) 9 9102-4918
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
        <Link href="https://wa.me/5512991024918" target="_blank">
          <BtnHero>
            {" "}
            <FaWhatsapp /> Agendar um horário
          </BtnHero>
        </Link>
      </div>
    </div>
  );
}
