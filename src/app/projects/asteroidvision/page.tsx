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
          Asteroid Visison is an iOS app to browse browse and filter asteroids.
          This was made possible by the NASA NEO Objects REST API. Users can
          explore orbital data and build a list of favorites.
        </p>
        <br></br>
        <p>
          I built this app following the MVVM pattern. I had an API service that
          was responsible for fetching the asteroids. For this service, I used
          URLSession and modern swift concurrency, using things like async await
          and group tasks. The API service fetched the JSON objects and returned
          it the viewmodel, which perfomred the buisness logic and provided the
          view the data for the user interface.
        </p>
        <br></br>
        <p>
          Users can change their unit preference in the unit control center.
          This was handled by storing an observerable object in the environment
          and passing this a bindable to the control center, so that one source
          of truth is maintained. Users unit selection are also stored in
          UserDefaults.
        </p>
        <br></br>
        <p>
          Lastly, I used SceneKit to render 3D models of the earth and
          asteroids, creating a dynamic and interactive user interface.
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
