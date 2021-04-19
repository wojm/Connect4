import "./styles.css";

function Column() {
  return (
    <div class="column">
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
      <p class="dot"></p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div class="board">
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </div>
      <br />
      It is yellows turn
      <button> change player</button>
    </div>
  );
}

/**
 * Task 1 - show who's turn it is
 * have a button change whose turn it is
 */

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
