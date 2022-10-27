const ContextMenu = ({ contextText, anchor, menuRef, setContextBlock }) => {
  return (
    <div
      ref={menuRef}
      className="context-menu"
      style={{ top: `${anchor.y}px`, left: `${anchor.x}px` }}
    >
      {contextText}
      <button
        className="btn btn-primary"
        value="Edit"
        onClick={(e) => {
          setContextBlock(false);
          console.log(e.target.value, contextText);
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        value="Remove"
        onClick={(e) => {
          setContextBlock(false);
          console.log(e.target.value, contextText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default ContextMenu;
