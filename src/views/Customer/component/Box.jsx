import React from "react";
import { useDrag } from "react-dnd";
const style = {
  display:" inline-block",
    width:" 100%",
    borderRadius : "23.5px",
    height: "2rem",
    padding: "0.5rem 0",
    color: "#808080",
    fontSize: "13px",
    border: "none",
    background:" #f7f7f7",
    marginBottom:" 15px"
  
};
const Box = ({ name, type }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};
export default Box;
