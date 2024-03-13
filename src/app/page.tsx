import Image from "next/image";
import styles from "./styles/main.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1>Noah Giboney</h1>
          <p>Hello Ther my name is noah giboey</p>
        </div>
      </div>
    </main>
  );
}
