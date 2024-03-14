import Image from "next/image";
import Link from "next/link";
import styles from "./styles/main.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1>Noah Giboney</h1>
          <div className={styles.infoLine}></div>
          <h2>iOS Developer & CS @ Cal Poly</h2>
          <p>
            Hi, my name is Noah Giboney, I&apos;m an aspiring iOS Developer and
            a third-year Computer Science student at Cal Poly, San Luis Obispo.
            Explore my projects below to see what I&apos;ve been working on.
          </p>
          <div className={styles.socialContainer}>
            <Link href={"https://www.linkedin.com/in/noah-giboney-896847261/"}>
              <div className={styles.social}>
                <Image
                  src={"/linkedin.svg"}
                  alt="linkedin logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link href={"https://github.com/noahgiboney"}>
              <div className={styles.social}>
                <Image
                  src={"/github.svg"}
                  alt="github logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.faceshot}>
          <Image
            src={"/faceshot.JPG"}
            alt="Noah Giboney Faceshot"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
