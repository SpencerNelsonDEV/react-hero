import React from "react";
import cloudImg from "./cloud.svg";
import styles from "./Cloud.module.css";

const Cloud = () => {
  return (
    <div className={styles.cloudContainer}>
      <img src={cloudImg} alt="cloud" className={styles.cloudImg} />
    </div>
  );
};

export default Cloud;
