import React, { Component } from "react";
import styles from "./App.module.css";
import Cloud from "./components/Cloud/Cloud";
import Rocket from "./components/Rocket/Rocket";

class App extends React.Component {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.wrapperLeft}>div 1</div>
        <div className={styles.wrapperRight}>
          <Cloud />
          <Rocket />
        </div>
      </div>
    );
  }
}

export default App;
