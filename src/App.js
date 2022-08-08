import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [OpenPopup, setOpenPopup] = useState(false);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "100px",
        }}
      >
        Click this button to open Popup.
        <button
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          Open
        </button>
      </div>
      {OpenPopup ? <Popup setOpenPopup={setOpenPopup} /> : null}
    </div>
  );
}

export default App;
