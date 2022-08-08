import React from "react";

export default function Popup(props) {
  setTimeout(() => {
    props.setOpenPopup(false);
  }, 5000);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "300px",
          backgroundColor: "green",
          height: "200px",
          border: "4px solid black",
          flexDirection: "column",
        }}
      >
        This is a Popup.
        <div>
          <button
            onClick={() => {
              props.setOpenPopup(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
