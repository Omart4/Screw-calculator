import React from "react";
import PlayerColumn from "./PlayerColumn";

const Table = ({ players, setPlayers }) => {
  return (
    <div className="table">
      <div className="headers">
        <p className="od">Round 1</p>
        <p className="ev">Round 2</p>
        <p className="od">Round 3</p>
        <p className="ev">Round 4</p>
        <p className="od">Round 5</p>
        <p className="ev">Round 5 (doubled)</p>
        <p className="od">Total</p>
      </div>
      {players.map((p) => (
        <PlayerColumn player={p} players={players} setPlayers={setPlayers} />
      ))}
    </div>
  );
};

export default Table;
