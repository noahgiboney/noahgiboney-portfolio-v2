import styles from "@/app/styles/projects.module.css";
import AppLogo from "../components/AppLogo";
import Link from "next/link";
import ImageSlider from "../components/ImageSlider";
import Image from "next/image";

const projectPage = () => {
  const test = [
    "/crytpidcoordinates/previews/preview1.png",
    "/crytpidcoordinates/previews/preview2.png",
    "/crytpidcoordinates/previews/preview3.png",
  ];

  const asteroidVisionPreviews = [
    "/asteroidvision/preview1.png",
    "/asteroidvision/preview2.png",
    "/asteroidvision/preview3.png",
  ];

  return (
    <section className={styles.mainContainer}>
      <div className={styles.header}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projectContainer}>
        <div
          className={styles.project}
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div className={styles.projectInfo}>
            <div className={styles.projectHeader}>
              <AppLogo path="/cryptid-coordinates-logo.png" />
              <h2>Cryptid Coordinates</h2>
            </div>
            <p>
              Cryptic Coordinates is a iOS app I built with SwiftUI and MapKit.
              Through database management and asynchronous network calls, it
              reveals haunted locations and ancient secrets hidden in plain
              sight. It is available on the app store, see below.
            </p>
            <div className={styles.buttonContainter}>
              <Link
                href={"/projects/cryptidcoordinates"}
                rel="noopener noreferrer"
              >
                <div className={styles.projectButton}>Learn More</div>
              </Link>
              <Link
                href={
                  "https://apps.apple.com/us/app/cryptid-coordinates/id6478195420"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className={styles.projectButton}>
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
            </div>
            <div className={styles.skillContainer}>
              <div className={styles.skill}>
                <p>SwiftUI</p>
              </div>
              <div className={styles.skill}>
                <p>MVVM</p>
              </div>
              <div className={styles.skill}>
                <p>MapKit</p>
              </div>
              <div className={styles.skill}>
                <p>Rest API</p>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <ImageSlider images={test} />
          </div>
        </div>
        <div
          className={styles.project}
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div className={styles.projectInfo}>
            <div className={styles.projectHeader}>
              <AppLogo path="/asteroidvision-icon.png" />
              <h2>Asteroid Vision</h2>
            </div>
            <p>
              Asteroid Vision, an app I built with SwiftUI and the NASA NEO
              objects Rest API. Through fethcing data by paginating and MVVM
              design pattern, I list hazardous and nonhazardous asteroids and
              display asteroid data and future appraoches. I also used SceneKit
              to display 3D models in the app.
            </p>
            <div className={styles.buttonContainter}>
              <Link href={"/projects/asteroidvision"} rel="noopener noreferrer">
                <div className={styles.projectButton}>Learn More</div>
              </Link>
              <Link
                href={
                  "https://apps.apple.com/us/app/asteroid-vision/id6480248381"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className={styles.projectButton}>
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
            </div>
            <div className={styles.skillContainer}>
              <div className={styles.skill}>
                <p>SwiftUI</p>
              </div>
              <div className={styles.skill}>
                <p>MVVM</p>
              </div>
              <div className={styles.skill}>
                <p>SceneKit</p>
              </div>
              <div className={styles.skill}>
                <p>Rest API</p>
              </div>
              <div className={styles.skill}>
                <p>Pagination</p>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <ImageSlider images={asteroidVisionPreviews} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default projectPage;
