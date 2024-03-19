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
      <div className={styles.moreInfo}>
        <h2>Built With</h2>
        <div className={styles.skillContainer}>
          <div className={styles.skill}>
            <p>SwiftUI</p>
          </div>
          <div className={styles.skill}>
            <p>●</p>
          </div>
          <div className={styles.skill}>
            <p>MapKit</p>
          </div>
          <div className={styles.skill}>
            <p>●</p>
          </div>
          <div className={styles.skill}>
            <p>MVVM</p>
          </div>
          <div className={styles.skill}>
            <p>●</p>
          </div>
          <div className={styles.skill}>
            <p>API</p>
          </div>
        </div>
        <p>
          Cryptic Coordinates is a iOS app I built with SwiftUI. I followed the
          MVVVM design pattern for this app. It reveals haunted locations and
          ancient hidden in plain sight. Navigate through an interactive map
          built with the MapKit framework. There is a high volume of locations
          on the map so I used{" "}
          <a
            href="https://github.com/vospennikov/ClusterMap.git"
            target="_blank"
          >
            ClusterMap
          </a>{" "}
          as a package dependecy to improve performace of rendering markers on
          the map. Selecting an map marker reveals details of the cryptid
          coordinate with directions included. Search navigation allows browsing
          of locations country wide.
        </p>
      </div>
    </section>
  );
};

export default MyComponent;
