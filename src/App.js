import { useState } from "react";
import "./styles.css";

function Dot(props) {
  const className = "dot " + props.color;
  return <p className={className}></p>;
}

function Column(props) {
  return (
    <div className="column" onClick={props.onClick}>
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

  const [arrayOfArrays, updateArrayOfArrays] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ]);

  function onClick(columnIndex) {
    if (arrayOfArrays[columnIndex].length < 6) {
      arrayOfArrays[columnIndex] = [...arrayOfArrays[columnIndex], playerTurn];
      updateArrayOfArrays([...arrayOfArrays]);
      togglePlayerTurn();
    }
  }

  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div className="board">
        <Column onClick={() => onClick(0)} colors={arrayOfArrays[0]}></Column>
        <Column onClick={() => onClick(1)} colors={arrayOfArrays[1]}></Column>
        <Column onClick={() => onClick(2)} colors={arrayOfArrays[2]}></Column>
        <Column onClick={() => onClick(3)} colors={arrayOfArrays[3]}></Column>
        <Column onClick={() => onClick(4)} colors={arrayOfArrays[4]}></Column>
        <Column onClick={() => onClick(5)} colors={arrayOfArrays[5]}></Column>
        <Column onClick={() => onClick(6)} colors={arrayOfArrays[6]}></Column>
      </div>
      <br />
      It is {playerTurn}s turn
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
