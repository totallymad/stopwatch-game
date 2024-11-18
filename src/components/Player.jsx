import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();
  const filePicker = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value); 
    playerName.current.value = ''
  }

  function handlePick() {
    filePicker.current.click
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : `unknown entity`}</h2>
      <p>
        <input
          ref={playerName}
          type="text" />
        <button onClick={handleClick}>Set Name</button>
        <input ref={filePicker} hidden type="file" />
        <button>Pick a file </button>
      </p>
    </section>
  );
}
