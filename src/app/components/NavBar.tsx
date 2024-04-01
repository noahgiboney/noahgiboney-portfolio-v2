'use client'
import { useState } from 'react';
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <div className={styles.navBar}>
        

        <Link href={"/"}>
          <div className={styles.logoContainer}>
            <div className={styles.logoImage}>
              <Image
                src={"/thunderbolt.svg"}
                alt="logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1>NG</h1>
          </div>
        </Link>

        <div className={styles.burger} onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <div className={`${styles.burgerLine} ${isNavExpanded ? styles.burgerLineActive : ''}`}></div>
          <div className={`${styles.burgerLine} ${isNavExpanded ? styles.burgerLineActive : ''}`}></div>
          <div className={`${styles.burgerLine} ${isNavExpanded ? styles.burgerLineActive : ''}`}></div>
        </div>

        <div className={`${styles.linksContainer} ${isNavExpanded ? styles.linksContainerActive : ''}`}>
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            {/* <li><Link href={"/projects"}>Projects</Link></li> */}
            <li><Link href={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;