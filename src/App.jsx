import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import AddPlayer from "./components/AddPlayer";
import LeaderboardModal from "./components/LeaderboardModal";

function App() {
  let [players, setPlayers] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {}, [players, modal]);
  return (
    <>
      <Navbar />
      <div className="main-app">
        <Table players={players} setPlayers={setPlayers} />
        <div className="bottom">
          <AddPlayer players={players} setPlayers={setPlayers} />
          <button
            id="leader"
            onClick={() => {
              players.length > 0 ? setModal(true) : alert("No players added");
            }}
          >
            Show leaderboard
          </button>
        </div>
      </div>
      {modal && <LeaderboardModal setModal={setModal} players={players} />}
    </>
  );
}

export default App;
