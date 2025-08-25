import styles from "./btnHero.module.scss";

export function BtnHero({ children }: { children: React.ReactNode }) {
  return <button className={styles.btnHero}>{children}</button>;
}
