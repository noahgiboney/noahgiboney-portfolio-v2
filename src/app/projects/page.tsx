import styles from "@/app/styles/projects.module.css";
import AppLogo from "../components/AppLogo";
import Link from "next/link";
import ImageSlider from "../components/ImageSlider";

const projectPage = () => {
  const test = [
    "/crytpidcoordinates/preview1.png",
    "/crytpidcoordinates/preview2.png",
    "/crytpidcoordinates/preview3.png",
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
              <Link href={""} rel="noopener noreferrer" target="_blank">
                <div className={styles.projectButton}>App Store</div>
              </Link>
            </div>
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
          </div>
          <ImageSlider images={test} />
        </div>
      </div>
    </section>
  );
};

export default projectPage;
