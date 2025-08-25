import styles from "./msg.module.scss";
import Image from "next/image";
import ImgFlor from "@/assets/logoBody.png";

export function Msg() {
  return (
    <section className={styles.contentMsg}>
      <Image
        src={ImgFlor}
        alt="logo"
        width={100}
        height={100}
        quality={100}
        priority
      />
      <p>
        &quot;Cuidar das unhas é mais do que estética é um gesto de
        amor-próprio.&quot;
      </p>
    </section>
  );
}
