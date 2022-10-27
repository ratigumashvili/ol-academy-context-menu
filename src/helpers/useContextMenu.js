import { useState, useEffect } from "react";

const useContextMenu = (ref, ref2) => {
  const [anchor, setAnchor] = useState({ x: 0, y: 0 });
  const [contextBlock, setContextBlock] = useState(false);
  const [contextText, setContextText] = useState("");

  useEffect(() => {
    const handleRightClick = (e) => {
      if (ref.current.contains(e.target)) {
        e.preventDefault();
        setContextBlock(true);
        setContextText(e.target.innerText);
        setAnchor({ x: e.pageX, y: e.pageY });
      }
    };
    document.addEventListener("contextmenu", handleRightClick);
    return () => document.removeEventListener("contextmenu", handleRightClick);
  });

  useEffect(() => {
    const removeContext = (e) => {
      if (ref2.current && ref2.current.contains(e.target)) {
        return;
      }
      if (!ref.current.contains(e.target)) {
        // e.target.value && console.log(e.target.value, contextText);
        setContextBlock(false);
      }
    };

    document.addEventListener("contextmenu", removeContext);
    document.addEventListener("click", removeContext);
    return () => {
      document.removeEventListener("contextmenu", removeContext);
      document.removeEventListener("click", removeContext);
    };
  }, [ref, ref2]);

  return {
    anchor,
    contextBlock,
    contextText,
    setContextBlock,
  };
};

export default useContextMenu;
