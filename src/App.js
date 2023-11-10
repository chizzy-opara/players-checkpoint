import React from "react";
// import Player from "./components/Player";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div className="App">
      <h2>Top Footballers</h2>
      <PlayersList />
    </div>
  );
}

export default App;
