import { useState } from "react";
import "./App.css";

function App() {
  let initScores = [
    { pos: 1, mark: "" }, { pos: 2, mark: "" }, { pos: 3, mark: "" },
    { pos: 4, mark: "" }, { pos: 5, mark: "" }, { pos: 6, mark: "" },
    { pos: 7, mark: "" }, { pos: 8, mark: "" }, { pos: 9, mark: "" },
  ];

  const [scores, setScores] = useState(initScores);
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState("X");  //-> player's turn to play. Either X or O
  const [info, setInfo] = useState("Start Play! Player = X");

  const switchTurn = () => {  //-> switch from player X to O or from player O to X
    const nextTurn = turn === "X" ? "O" : "X";
    setTurn(nextTurn);
    setInfo("Player = "+nextTurn);
  };

  //-> check if a player has won or if the gmae is finished in a draw
  const checkScore = () => {
    let row1 = [], row2 = [], row3 = [], col1 = [], col2 = [], col3 = [], diag1 = [], diag2 = [];
    scores.forEach((gs) => {
      switch (gs.pos) {
        case 1:
          row1.push(gs.mark);
          col1.push(gs.mark);
          diag1.push(gs.mark);
          break;
        case 2:
          row1.push(gs.mark);
          col2.push(gs.mark);
          break;
        case 3:
          row1.push(gs.mark);
          col3.push(gs.mark);
          diag2.push(gs.mark);
          break;
        case 4:
          row2.push(gs.mark);
          col1.push(gs.mark);
          break;
        case 5:
          row2.push(gs.mark);
          col2.push(gs.mark);
          diag1.push(gs.mark);
          diag2.push(gs.mark);
          break;
        case 6:
          row2.push(gs.mark);
          col3.push(gs.mark);
          break;
        case 7:
          row3.push(gs.mark);
          col1.push(gs.mark);
          diag2.push(gs.mark);
          break;
        case 8:
          row3.push(gs.mark);
          col2.push(gs.mark);
          break;
        case 9:
          row3.push(gs.mark);
          col3.push(gs.mark);
          diag1.push(gs.mark);
          break;
        default:
          break;
      }
    });

    let _winner = "";
    if(row1.filter(v => v === "X").length === 3) _winner = "X";
    if(row2.filter(v => v === "X").length === 3) _winner = "X";
    if(row3.filter(v => v === "X").length === 3) _winner = "X";
    if(col1.filter(v => v === "X").length === 3) _winner = "X";
    if(col2.filter(v => v === "X").length === 3) _winner = "X";
    if(col3.filter(v => v === "X").length === 3) _winner = "X";
    if(diag1.filter(v => v === "X").length === 3) _winner = "X";
    if(diag2.filter(v => v === "X").length === 3) _winner = "X";
    if(row1.filter(v => v === "O").length === 3) _winner = "O";
    if(row2.filter(v => v === "O").length === 3) _winner = "O";
    if(row3.filter(v => v === "O").length === 3) _winner = "O";
    if(col1.filter(v => v === "O").length === 3) _winner = "O";
    if(col2.filter(v => v === "O").length === 3) _winner = "O";
    if(col3.filter(v => v === "O").length === 3) _winner = "O";
    if(diag1.filter(v => v === "O").length === 3) _winner = "O";
    if(diag2.filter(v => v === "O").length === 3) _winner = "O";
    setWinner(_winner);

    let _draw = false;
    const all = row1.concat(row2).concat(row3).concat(col1).concat(col2).concat(col3).concat(diag1).concat(diag2);
    let size = all.filter(e => e === "X" || e === "O").length;
    
    if(size === 24) _draw = true; //-> 24 is the total number of push statements in the switch control above
    setDraw(_draw);

    return {_winner, _draw};
  };

  const playTurn = (s) => {
    if(draw) return;                                // check if game is draw
    if(winner === "X" || winner === "O") return;    // check if game is won

    let _scores = [...scores];
    
    // get position and mark of clicked square
    const _filter = _scores.filter(gs => gs.pos === s.pos)
    if(! _filter.at(0).mark == "") return;  // check if square is already marked

    const _score = _filter.at(0);
    _score.mark = turn;
    
    // mark the cell for current player turn
    _scores.splice(s.pos -1, 1, _score);
    
    setScores(_scores);
    const {_winner, _draw} = checkScore();
    // check if game is won
    if(_winner === "X" || _winner === "O") {
      setInfo("Player "+turn+" Wins! Refresh page to restart");
      return;
    }
    // check if game is draw
    if(_draw){
      setInfo("Draw Game! Refresh page to restart");
      return;
    }
    switchTurn();
  };

  return (
    <div className="App">
      <div>{info}</div>
      <div id="board">
        {scores.map((s) => (
          <div key={s.pos} className="square" onClick={() => playTurn(s)}>{s.mark}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
