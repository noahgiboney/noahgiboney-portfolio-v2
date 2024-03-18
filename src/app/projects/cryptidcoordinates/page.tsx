import React from "react";
import styles from "@/app/styles/project.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const MyComponent: React.FC<Props> = (props) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.infoContainer}>
        <h1>Cryptid Coordinates</h1>
        <div className={styles.buttonContainter}>
          <Link
            href={
              "https://apps.apple.com/us/app/cryptid-coordinates/id6478195420"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.button}>
              <Image
                src={"/appleicon.png"}
                alt="apple icon"
                width={16}
                height={16}
                objectFit="contain"
              />
              Download
            </div>
          </Link>
          <Link
            href={"https://github.com/noahgiboney/cryptid-coordinates"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.button}>Github</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
