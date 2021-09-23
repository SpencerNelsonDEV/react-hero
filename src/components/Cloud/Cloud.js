import React from "react";
import cloudImg from "./cloud.svg";
import styles from "./Cloud.module.css";

const Cloud = ({ position }) => {
  return (
    <div className={styles.cloudContainer} style={{ left: position.x, top: position.y }}>
      <img src={cloudImg} alt="cloud" className={styles.cloudImg} />
    </div>
  );
};

export default Cloud;
