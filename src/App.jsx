import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import AddPlayer from "./components/AddPlayer";

function App() {
  let [players, setPlayers] = useState([]);
  useEffect(() => {
    console.log(players);
  }, [players]);
  return (
    <>
      <Navbar />
      <div className="main-app">
        <Table players={players} />
        <AddPlayer players={players} setPlayers={setPlayers} />
      </div>
    </>
  );
}

export default App;
