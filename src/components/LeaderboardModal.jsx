import "../styles/LeaderboardModal.css";

import React from "react";

const LeaderboardModal = ({ players, setModal }) => {
  let sorted = players.sort((a, b) => a.score - b.score);
  let rest = sorted.slice(1);

  const positionChecker = (count) => {
    if (count === 0) {
      return "🥈";
    } else if (count === 1) {
      return "🥉";
    } else {
      return `${count + 2}`;
    }
  };

  return (
    <div className="leaders">
      <div className="split">
        <div className="winner">
          <h3>Winner👑 is ...</h3>
          <p>{sorted[0].name}</p>
          <h4>Score</h4>
          <p>{sorted[0].score}</p>
        </div>
        <div className="rest">
          {rest.map((player, i) => (
            <p>{`${positionChecker(i)} - ${player.name} , score:${
              player.score
            }`}</p>
          ))}
        </div>
      </div>
      <button onClick={() => setModal(false)}>close</button>
    </div>
  );
};

export default LeaderboardModal;
