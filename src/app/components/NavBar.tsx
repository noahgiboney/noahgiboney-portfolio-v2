import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logoContainer}>NG</div>

        <div className={styles.linksContainer}>
          <ul>
            <li>
              <Link href={"Home"}>Home</Link>
            </li>
            <li>
              <Link href={"Projects"}>Projects</Link>
            </li>
            <li>
              {/* <Link href={"Projects"}>
                <Image
                  src="/linkedin.svg" 
                  alt="Description of the Image" 
                  width={35} 
                  height={35} 
                />
              </Link> */}
            </li>
            <li>
              {/* <Link href={"Projects"}>
                <Image
                  src="/github.svg" 
                  alt="Description of the Image" 
                  width={30} 
                  height={30} 
                />
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
