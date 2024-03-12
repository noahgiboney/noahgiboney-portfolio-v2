import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logoContainer}>logo</div>

        <div className={styles.linksContainer}>
          <ul>
            <li>
              <Link href={"Home"}>Home</Link>
            </li>
            <li>
              <Link href={"Projects"}>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
