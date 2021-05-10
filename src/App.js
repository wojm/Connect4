import { useState } from "react";
import "./styles.css";

function Dot(props) {
  const className = "dot " + props.color;
  return <p class={className}></p>;
}

function Column(props) {
  return (
    <div class="column">
      <Dot color={props.colors[5]}></Dot>
      <Dot color={props.colors[4]}></Dot>
      <Dot color={props.colors[3]}></Dot>
      <Dot color={props.colors[2]}></Dot>
      <Dot color={props.colors[1]}></Dot>
      <Dot color={props.colors[0]}></Dot>
    </div>
  );
}

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");

  function togglePlayerTurn() {
    if (playerTurn === "yellow") {
      changePlayerTurn("red");
    } else {
      changePlayerTurn("yellow");
    }
  }
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div class="board">
        <Column
          colors={["red", "yellow", "yellow", "red", "yellow", "red"]}
        ></Column>
        <Column colors={["yellow", "red"]}></Column>
        <Column colors={["red"]}></Column>
        <Column colors={[]}></Column>
        <Column colors={[]}></Column>
        <Column colors={[]}></Column>
        <Column colors={[]}></Column>
        <Column colors={[]}></Column>
      </div>
      <br />
      It is {playerTurn}s turn
      <button onClick={togglePlayerTurn}> change player</button>
    </div>
  );
}

/**
 * Task 2 - add functionality for dropping a chip
 * click on a button above each column
 *   then the lowest unfilled slot gets filled with a color
 */

/**
 * Task 3
 * show if there are 4 pieces connected in a row
 *  - vertically
 *  - horizontally
 *  - diagonally
 */
function isWin(board) {}

const exampleState = {
  nextTurn: "yellow",
  board: [[], [], [], ["yellow", "yellow", "red"], ["red"], [], []]
};

isWin(exampleState.board); // no one wins

isWin([
  [],
  [],
  [],
  ["yellow", "yellow", "yellow", "yellow", "red"],
  ["red"],
  ["red"],
  ["red"]
]); // yellow wins
