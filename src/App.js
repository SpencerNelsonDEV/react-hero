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
      x: window.innerWidth / 2 + window.innerWidth / 4 - 50,
      y: window.innerHeight / 2 - 200,
    },
    cloudPosition: {
      x: window.innerWidth / 2,
      y: 50,
    },
    goalPosition: {
      x: window.innerWidth / 2 + window.innerWidth / 4 - 100,
      y: window.innerHeight - 150,
    },
    achievedGoal: false,
  };

  componentDidMount() {
    this.updateCloudPosition();
  }

  updateRocket = (moveValue) => {
    const { rocketPosition, goalPosition } = this.state;

    const newRocketPosition = {
      x: rocketPosition.x + moveValue.x,
      y: rocketPosition.y + moveValue.y,
    };

    const updatedAchievedGoal = newRocketPosition.y > goalPosition.y - 85;

    this.setState({ rocketPosition: newRocketPosition, achievedGoal: updatedAchievedGoal });
  };

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
          <RocketContorls updateParent={this.updateRocket} />
        </div>
        <div className={styles.wrapperRight}>
          <Cloud position={cloudPosition} />
          <Rocket position={rocketPosition} achievedGoal={achievedGoal} />
          <Goal position={goalPosition} />
        </div>
      </div>
    );
  }
}

export default App;
