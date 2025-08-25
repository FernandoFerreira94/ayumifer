import styles from "./main.module.scss";

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return <main className={styles.main}>{children}</main>;
}
