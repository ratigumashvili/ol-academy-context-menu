import { data } from "../data";
import { useRef } from "react";
import ContextMenu from "./ContextMenu";
import useContextMenu from "../helpers/useContextMenu";
import ListItem from "./ListItem";

const List = () => {
  const ulRef = useRef();
  const { anchor, contextBlock, contextText } = useContextMenu(ulRef);
  return (
    <>
      <ul ref={ulRef} className="context-wrapper">
        {data.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
      {contextBlock && (
        <ContextMenu contextText={contextText} anchor={anchor} />
      )}
    </>
  );
};

export default List;
