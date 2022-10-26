import React from "react";

const ContextMenu = ({ text, position }) => {
  return (
    <div
      className="context-menu"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      {text}
      <button className="btn btn-primary" value="Edit">
        Edit
      </button>
      <button className="btn btn-primary" value="Remove">
        Remove
      </button>
    </div>
  );
};

export default ContextMenu;
