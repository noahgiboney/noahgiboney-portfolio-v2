import Image from "next/image";
import Link from "next/link";
import styles from "./styles/main.module.css";
import AppLogo from "./components/AppLogo";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
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
    <main className={styles.main}>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1>Noah Giboney</h1>
          <div className={styles.infoLine}></div>
          <h3>CS @ Cal Poly</h3>
          <p>
            Hi, my name is Noah Giboney, I&apos;m a a third-year Computer
            Science student at Cal Poly, San Luis Obispo, interested in iOS
            software engineering. Explore my projects and more about me below.
          </p>
          <div className={styles.socialContainer}>
            <Link
              href={"https://www.linkedin.com/in/noah-giboney-896847261/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.social}>
                <Image
                  src={"/linkedin.svg"}
                  alt="linkedin logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link
              href={"https://github.com/noahgiboney"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.social}>
                <Image
                  src={"/github.svg"}
                  alt="github logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link href={"/contact"} rel="noopener noreferrer">
              <div className={styles.social}>
                <Image
                  src={"/email.svg"}
                  alt="contact icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link
              href={
                "https://apps.apple.com/us/developer/noah-giboney/id1732186750"
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
                App Store
              </div>
            </Link>
            <Link
              href={"/Noah Giboney Resume.pdf"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.button}>Resume</div>
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
      {/* <section className={styles.experienceContainer}>
        <h1>Experience</h1>
        <div className={styles.experience}>
          <AppLogo path="/lifelogo.jpeg" />
          <div className={styles.title}>
            <h3>iOS Developer</h3>
            <p className={styles.date}>March 2024 - Present</p>
          </div>
        </div>
      </section> */}
      <section className={styles.projectContainer}>
        <h1>Projects</h1>
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
              Asteroid Vision, an app I built with SwiftUI and the NASA
              NEO objects Rest API. Through fethcing data by paginating and MVVM
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
      </section>
      <section className={styles.interestsContainer}>
        <h1>Interests</h1>
        <div className={styles.interest}>
          <div className={styles.interestInfo}>
            <p>
              This is my MK7 VW GTI. I love this car because it has the speed to
              explode through traffic while being a great daily commuter Some
              mods I have done: clubsport exhuast, carbon fiber spoiler
              extension, diffuser, and gloss black rims.
            </p>
          </div>
          <div className={styles.interestPhoto}>
            <Image
              src={"/gti.jpg"}
              alt="git pic"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div className={styles.interest}>
          <div className={styles.interestPhoto}>
            <Image
              src={"/soccerpic.JPG"}
              alt="soccer pic"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className={styles.interestInfo}>
            <p>
              I&apos;m a big fan of fitness & excerise. For me the key to having
              a healthy mind is having a healthy body. I enjoy lifting weights,
              playing soccer, swimming, and going for runs in my free time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
