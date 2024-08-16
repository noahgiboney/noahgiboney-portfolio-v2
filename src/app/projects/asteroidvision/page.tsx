import React from "react";
import styles from "@/app/styles/project.module.css";
import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/app/components/AppLogo";

interface Props {}

const MyComponent: React.FC<Props> = (props) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.projectHeader}>
          <AppLogo path="/asteroidvision-icon.png" />
          <h1>Asteroid Vision</h1>
        </div>
        <div className={styles.buttonContainter}>
          <Link
            href={"https://apps.apple.com/us/app/asteroid-vision/id6480248381"}
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
        <div className={styles.skillsHeader}>
          <h2>Built With</h2>
          <div className={styles.skillContainer}>
            <div className={styles.skill}>
              <p>SwiftUI</p>
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
              <p>REST API</p>
            </div>
            <div className={styles.skill}>
              <p>●</p>
            </div>
            <div className={styles.skill}>
              <p>URLSession</p>
            </div>
          </div>
        </div>
        <p>
          Asteroid Visison is an iOS app to browse asteroids that are marked as
          hazardous by NASA. This was made possible by the NASA NEO Objects REST
          API. Users can explore orbital data and build a list of favorites.
        </p>
        <br></br>
        <p>
          In order to handle the NASA REST API, I maintained a Asteroid Store,
          which is an observerable object that communicated with an HTTPClient
          that is responsible for fetching the asteroids from the API using
          URLSession. I also implemented pagination as the users scrolls to
          fetch more asteroids.
        </p>
        <br></br>
        <p>
          Users can change thier unit preference in the contorl center. This was
          handled by storing an observerable object in the environment and
          passing this a bindable to the control center, so that one source of
          truth is maintained. Users unit selection are also stored in
          UserDefaults.
        </p>
        <br></br>
        <p>
          I used SceneKit to render 3D models of the earth and asteroids,
          creating a dynamic and interactive user interface.
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
          <p>Browse hazardous asteroids approaching earth.</p>
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
          <p>Asteroid history and orbital data.</p>
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
          <p>Control the units for each statistic.</p>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
