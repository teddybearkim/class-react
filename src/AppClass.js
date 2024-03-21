import React, { Component } from "react";
import "./App.css";
import BoxClass from "./Component/BoxClass";
import RockImg from "./images/rock.jpg"
import ScissorsImg from "./images/scissors.jpg"
import PaperImg from "./images/paper.jpg"

const choice = {
  rock: {
    name: "Rock",
    img: RockImg
  },
  scissors: {
    name: "Scissors",
    img: ScissorsImg
  },
  paper: {
    name: "Paper",
    img: PaperImg
  },
};
export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };
  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("rock")}>✊</button>
          <button onClick={() => this.play("scissors")}>✌️</button>
          <button onClick={() => this.play("paper")}>✋</button>
        </div>
      </div>
    );
  }
}
