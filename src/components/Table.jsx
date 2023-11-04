import React from "react"
import PlayerColumn from "./PlayerColumn";

const Table = ({players}) => {
  return (
    <div className="table">
        <div className="headers">
            <p>Round 1</p>
            <p>Round 2</p>
            <p>Round 3</p>
            <p>Round 4</p>
            <p>Round 5</p>
            <p>Total</p>
        </div>
        {players.map(p=>(<PlayerColumn player={p}/>))}
    </div>
  )
};

export default Table;
