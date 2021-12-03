import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import PaintData from "./components/PaintData";

function App() {
  const [characterName, setCharacterName] = useState("");

  return (
    <div className="App container">
      <h1>App Rick and Morty</h1>
      <Form setCharacterName={setCharacterName} />
      <PaintData characterName={characterName} />
    </div>
  );
}

export default App;
