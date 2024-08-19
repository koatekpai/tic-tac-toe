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

  const switchTurn = () => {  //-> switch from player X to O or from player O to X
    setTurn(turn === "X" ? "O" : "X");
  };

  const checkScore = () => {
    //-> check if a player has won or if the gmae is finished in a draw
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

    if(row1.filter(v => v === "X").length === 3) setWinner("X");
    if(row2.filter(v => v === "X").length === 3) setWinner("X");
    if(row3.filter(v => v === "X").length === 3) setWinner("X");
    if(col1.filter(v => v === "X").length === 3) setWinner("X");
    if(col2.filter(v => v === "X").length === 3) setWinner("X");
    if(col3.filter(v => v === "X").length === 3) setWinner("X");
    if(diag1.filter(v => v === "X").length === 3) setWinner("X");
    if(diag2.filter(v => v === "X").length === 3) setWinner("X");
    if(row1.filter(v => v === "O").length === 3) setWinner("O");
    if(row2.filter(v => v === "O").length === 3) setWinner("O");
    if(row3.filter(v => v === "O").length === 3) setWinner("O");
    if(col1.filter(v => v === "O").length === 3) setWinner("O");
    if(col2.filter(v => v === "O").length === 3) setWinner("O");
    if(col3.filter(v => v === "O").length === 3) setWinner("O");
    if(diag1.filter(v => v === "O").length === 3) setWinner("O");
    if(diag2.filter(v => v === "O").length === 3) setWinner("O");

    const all = row1.concat(row2).concat(row3).concat(col1).concat(col2).concat(col3).concat(diag1).concat(diag2);
    let size = all.filter(e => e.mark === "X" || e.mark === "O").length;
    if(size === 9) setDraw(true);
console.log("ALL >>> ", all);
  };

  const playTurn = (s) => {
    if(draw) return;                                // check if game is draw
    if(winner === "X" || winner === "O") return;      // check if game is won

    let _scores = [...scores];
    
    // get position and mark of clicked square
    const _filter = _scores.filter(gs => gs.pos === s.pos)// check if square is already marked
    if(! _filter.at(0).mark === "") return;
    const _score = _filter.at(0);
    _score.mark = turn;
    
    // mark the cell for current player turn
    _scores.splice(s.pos -1, 1, _score);
console.log(">> GS", _scores);
    // update clicked position in _scores with player turn value
    setScores(_scores);
    checkScore();
    //TODO check if game is won
      // if won, Alert Won
    //TODO check if game is draw
      // if draw, Alert draw
    switchTurn();
  };

  return (
    <div className="App">
      <div id="board">
        {scores.map((s) => (
          <div key={s.pos} className="square" onClick={() => playTurn(s)}>{s.mark}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
