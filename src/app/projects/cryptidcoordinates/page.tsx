import React from "react";
import styles from "@/app/styles/project.module.css";
import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/app/components/AppLogo";
import YoutubeEmbed from "@/app/components/YoutubeEmbed";

interface Props {}

const MyComponent: React.FC<Props> = (props) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.projectHeader}>
          <AppLogo path="/cryptid-coordinates-logo.png" />
          <h1>Cryptid Coordinates</h1>
        </div>
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
      <div className={styles.vidContainer}>
        <YoutubeEmbed embedId="bPAT3SDNc0g" />
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
              <p>Firebase</p>
            </div>
            <div className={styles.skill}>
              <p>●</p>
            </div>
            <div className={styles.skill}>
              <p>SwiftData</p>
            </div>
            <div className={styles.skill}>
              <p>●</p>
            </div>
            <div className={styles.skill}>
              <p>MapKit</p>
            </div>
          </div>
        </div>
        <p>
          Cryptid Coordinates is a platform to explore haunted locations across
          the united states. A gateway into uncovering paranormal activity near
          and far.
        </p>
        <br></br>
        <p>
          Overview of features: Discover Haunted Locations: Browse a list of
          over ten thousand haunted spots across the U.S., each with detailed
          information and spine-chilling stories told by other users. Visit &
          Compete: Track the locations you&apos;ve visited and climb the leaderboard.
          Challenge your friends and see who can visit the most haunted sites.
          Explore Nearby: Find haunted locations near you with the app&apos;s
          location-based search and share your ghost hunting experience.
          Interactive Map: View and navigate to haunted places with an
          easy-to-use map interface, allowing your exploration to be visual.
          Request a location: Know of spot not in our system? File a request to
          broaden the ecosystem.
        </p>
        <br></br>
        <p>
          In order to greatly optimize performance of this app, I used SwiftData
          for location querying. On the the users first load of the app,
          locations objects are decoded from a JSON file and then converted to
          SwiftData models and inserted into the model context. This allows
          lightning fast querying of locations, great for location based
          searches, text searches, etc.
        </p>
        <br></br>
        <p>
          MapKit is a great framework that offers an immersive way to browse
          haunted locations as map markers around users real time location.
          There is a high volume of locations on the map so I used{" "}
          <a
            href="https://github.com/vospennikov/ClusterMap.git"
            target="_blank"
          >
            ClusterMap
          </a>{" "}
          as a package dependecy to improve performace of rendering markers on
          the map. Another way of optimizing the map was to compute a geohash,
          which is essentially a geographical box where the coordinates lies and
          you can control the degree of that hash. Geohashes were used as a
          basis for clustering and reloading the annotations when the camera
          moved.
        </p>
        <br></br>
        <p>
          In order to maintain my user base, I am using Apple ID to authenticate
          users through Firebase Auth. This simplified onboarding for users, as
          the app is exclusive to iOS.
        </p>
        <br></br>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/crytpidcoordinates/preview1.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Explore haunted locations near and far.</p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/crytpidcoordinates/preview2.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>
            History of each location with personal stories from other users.
          </p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/crytpidcoordinates/preview3.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>
            View locations on an interactive map with your real time location.
          </p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/crytpidcoordinates/preview4.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Visit Locations to detect paranormal activity.</p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/crytpidcoordinates/preview5.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Compete on the leaderboard for visiting haunted locations.</p>
        </div>
        <div className={styles.imageText}>
          <div className={styles.image}>
            <Image
              src={"/crytpidcoordinates/preview6.png"}
              alt="app preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Customizable profile. Pick out a name and avatar.</p>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
