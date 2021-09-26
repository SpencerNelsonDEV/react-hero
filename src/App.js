import React, { Component } from "react";
import styles from "./App.module.css";
import Cloud from "./components/Cloud/Cloud";
import Rocket from "./components/Rocket/Rocket";
import RocketContorls from "./components/RocketControls/RocketControls";
import DataDisply from "./components/DataDisplay/DataDisplay";
import Goal from "./components/Goal/Goal";

class App extends Component {
  state = {
    rocketPosition: {
      x: window.innerWidth / 2 + window.innerWidth / 4 - 100,
      y: window.innerHeight / 2 - 100,
    },
    cloudPosition: {
      x: window.innerWidth / 2,
      y: 50,
    },
    goalPosition: {
      x: window.innerWidth / 2 + window.innerWidth / 4 - 100,
      y: window.innerHeight - 200,
    },
    achievedGoal: false,
  };

  componentDidMount() {
    this.updateCloudPosition();
  }

  updateCloudPosition = () => {
    const { cloudPosition } = this.state;
    let newCloudPosition;
    if (cloudPosition.x > window.innerWidth - 70) {
      newCloudPosition = {
        x: window.innerWidth / 2,
        y: 50,
      };
    } else {
      newCloudPosition = { x: cloudPosition.x + 0.07, y: cloudPosition.y };
    }
    this.setState({ cloudPosition: newCloudPosition });
    window.requestAnimationFrame(this.updateCloudPosition);
  };

  render() {
    const { rocketPosition, cloudPosition, goalPosition, achievedGoal } = this.state;
    const data = { rocketPosition, cloudPosition, achievedGoal };
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.wrapperLeft}>
          <DataDisply data={data} />
          <RocketContorls />
        </div>
        <div className={styles.wrapperRight}>
          <Cloud position={cloudPosition} />
          <Rocket position={rocketPosition} />
          <Goal position={goalPosition} />
        </div>
      </div>
    );
  }
}

export default App;
