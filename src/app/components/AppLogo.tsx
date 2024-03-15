import React from "react";
import styles from "@/app/styles/applogo.module.css";
import Image from "next/image";

interface Prop {
  path: string;
}

const AppLogo: React.FC<Prop> = ({ path }) => {
  return (
    <div className={styles.app}>
      <Image src={path} alt="app logo" layout="fill" objectFit="cover" />
    </div>
  );
};

export default AppLogo;
