import React from "react";

const ContextMenu = ({ text, position }) => {
  return (
    <div
      className="context-menu"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      {text}
    </div>
  );
};

export default ContextMenu;
