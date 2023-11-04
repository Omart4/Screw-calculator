import React, { useState } from "react";

const AddPlayer = ({ players, setPlayers }) => {
  const tempArr = [...players];
  let [playerName, setPlayerName] = useState("");
  const Adder = () => {
    tempArr.push({
      name: playerName,
      score: 0,
    });
    setPlayers(tempArr);
  };
  return (
    <div className="add">
      <input
        type="text"
        onKeyUp={(e) => {
          setPlayerName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            Adder();
          }
        }}
      />
      <button
        onClick={() => {
          Adder();
        }}
      >
        Add player
      </button>
    </div>
  );
};

export default AddPlayer;
