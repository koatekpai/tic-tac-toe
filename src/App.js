import { useState } from "react";
import "./App.css";

function App() {
  const [scores, setScores] = useState([
    {pos: 1, mark:""}, {pos:2, mark:""}, {pos:3, mark:"X"}, 
    {pos: 4, mark:""}, {pos:5, mark:"O"}, {pos:6, mark:""}, 
    {pos: 7, mark:"X"}, {pos:8, mark:""}, {pos:9, mark:""}
  ]);

  const [end, setEnd] = useState(false);

  const playTurn = (s) => {
    console.log("Square ", s.pos, " clicked. It contains: ", s.mark);
  }

  return (
    <div className="App">
      <div id="board"> 
        {
          scores.map( s => <div key={s.pos} className="square" onClick={()=>playTurn(s)}> {s.mark} </div>)
        }
      </div>
    </div>
  );
}

export default App;
