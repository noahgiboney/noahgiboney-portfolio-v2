import React from "react";
import styles from "@/app/styles/project.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const MyComponent: React.FC<Props> = (props) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.infoContainer}>
        <h1>Asteroid Vision</h1>
        <div className={styles.buttonContainter}>
          <Link
            href={
              "https://apps.apple.com/us/app/asteroid-vision/id6480248381"
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
            href={"https://github.com/noahgiboney/asteroid-vision"}
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
            <p>MVVM</p>
          </div>
          <div className={styles.skill}>
            <p>●</p>
          </div>
          <div className={styles.skill}>
            <p>SceneKit</p>
          </div>
          <div className={styles.skill}>
            <p>●</p>
          </div>
          <div className={styles.skill}>
            <p>Rest API</p>
          </div>
          <div className={styles.skill}>
            <p>●</p>
          </div>
          <div className={styles.skill}>
            <p>Pagination</p>
          </div>
        </div>
        <p>
          Asteroid Vision is an iOS app I built with SwiftUI and the NASA NEO
          objects Rest API. Through fethcing data by paginating and MVVM design
          pattern, I list hazardous and nonhazardous asteroids and display
          asteroid data and their future appraoches. I also used SceneKit to
          display 3D models in the app. Users can build a list of favorites that
          are stored in user defaults. Filter through asteoirds via sliders and
          also swtich between supported unit types.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/asteroidvision/preview1.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Explore hazardous asteroids approaching earth.</p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/asteroidvision/preview2.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Browse a full collection of asteroids in our galaxy.</p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/asteroidvision/preview3.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>
            View detailed data about the asteroids, including their future
            approaches.
          </p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/asteroidvision/preview4.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>
            Build a list of favorites, stored in user defaults to come back to
            later.
          </p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/asteroidvision/preview5.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Filter asteroids by size, velocity and magnitude.</p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/asteroidvision/preview6.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Data is supported in several unit selections.</p>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
