import { useState } from "react";

import GameBoard from "./component/GameBoard.jsx";
import Player from "./component/Player.jsx";
import Log from "./component/Log.jsx"
import GameOver from "./component/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";



const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X : 'Player 1',
    O : 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([]);

  let winner;
  let gameBoard = [...initialGameBoard.map(array=>[...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol && thirdSquareSymbol){
      winner = players[firstSquareSymbol];
    }
  }


  const activePlayer = deriveActivePlayer(gameTurns);

  const hasDraw = gameTurns.length === 9 && !winner;


  function handlerSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(gameTurns);

      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updateTurns;
    })
  }

  function handlerRestart(){
    setGameTurns([]);
  }

  function handlePlayersNameChange(symbol, newName){
    setPlayers(prevPlayers =>{
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} onChangeName ={handlePlayersNameChange}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} onChangeName ={handlePlayersNameChange}></Player>
        </ol>
        {(winner || hasDraw )&& <GameOver winner={winner} onRestart={handlerRestart}></GameOver>}
        <GameBoard onSelectSquare={handlerSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
