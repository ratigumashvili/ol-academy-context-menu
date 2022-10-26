import React from "react";

const ContextMenu = ({ text, position, closeContext }) => {
  return (
    <div
      className="context-menu"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      {text}
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("Edit");
          closeContext();
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("Remove");
          closeContext();
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default ContextMenu;
