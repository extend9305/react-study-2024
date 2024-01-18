import { useState } from "react";

import GameBoard from "./component/GameBoard.jsx";
import Player from "./component/Player.jsx";
import Log from "./component/Log.jsx"

function App() { 
  const [gameTurns,setGameTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');

  function handlerSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer)=> (curActivePlayer === 'X'?'O':'X' ));
    setGameTurns((prevTurns)=>{
      let currentPlayer = 'X';
      
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
       const updateTurns = [{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns];
        return updateTurns;
      })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="O" isActive={activePlayer === "X"}></Player>
          <Player initialName="Player 2" symbol="X" isActive={activePlayer === "O"}></Player>
        </ol>
        <GameBoard onSelectSquare={handlerSelectSquare} turns={gameTurns}/>
      </div>
      <Log></Log>
    </main>
  );
}

export default App;
