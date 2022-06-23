import React from "react";
import styles from "./index.module.css";

const Title = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <h4 className={styles.description}>
        Agency provides a full service range including technical skills,
        business understanding.
      </h4>
    </div>
  );
};
export default Title;
