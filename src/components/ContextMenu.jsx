const ContextMenu = ({ contextText, anchor }) => {
  return (
    <div
      className="context-menu"
      style={{ top: `${anchor.y}px`, left: `${anchor.x}px` }}
    >
      {contextText}
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
