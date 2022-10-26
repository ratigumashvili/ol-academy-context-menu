import { useRef, useEffect, useState } from "react";
import { data } from "../data";
import ContextMenu from "./ContextMenu";
import ListItem from "./ListItem";

const List = () => {
  const ulRef = useRef();
  const [contextBlock, setCotextBlock] = useState(false);
  const [contextText, setContextText] = useState("");

  useEffect(() => {
    const handleRightClick = (e) => {
      if (ulRef.current.contains(e.target)) {
        e.preventDefault();
        setCotextBlock(true);
        setContextText(e.path[0].innerText);
        console.log(e.pageX, e.pageY);
      }
    };
    document.addEventListener("contextmenu", handleRightClick);
    return () => document.removeEventListener("contextmenu", handleRightClick);
  });

  useEffect(() => {
    const removeContext = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setCotextBlock(false);
        console.log("outside");
      }
    };

    document.addEventListener("contextmenu", removeContext);
    return () => document.removeEventListener("contextmenu", removeContext);
  }, []);
  return (
    <>
      <ul ref={ulRef}>
        {data.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
      {contextBlock && <ContextMenu text={contextText} />}
    </>
  );
};

export default List;
