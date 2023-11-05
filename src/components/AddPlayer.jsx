import React, { useRef, useState } from "react";

const AddPlayer = ({ players, setPlayers }) => {
  const addInput = useRef(null);
  const tempArr = [...players];
  let [playerName, setPlayerName] = useState("");

  const Adder = (e) => {
    if (playerName == "") {
      alert("Player must have a name");
    } else {
      tempArr.push({
        name: playerName,
        score: 0,
      });
      setPlayers(tempArr);
      addInput.current.value = "";
    }
  };

  return (
    <div className="add">
      <label htmlFor="addP">Add a player</label>
      <input
        id="addP"
        type="text"
        onKeyUp={(e) => {
          setPlayerName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            Adder(e);
          }
        }}
        ref={addInput}
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
