import React from "react";
import { useDrop } from "react-dnd";
import "../Styles/Example.css"


const Dustbin = ({ accept, lastDroppedItem, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = isOver && canDrop;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
   
  return (
    <div ref={drop} >
    <form>
        <input 
        
        className="form-control"
        placeholder="Nhập nội dung"
        type="text" 
        name={lastDroppedItem}
        value={lastDroppedItem}

        />

    </form>
      {/* {isActive
        ? 'Release to drop'
        : `This dustbin accepts: ${accept.join(', ')}`} */}

      {/* {lastDroppedItem && (
        <p>{JSON.stringify(lastDroppedItem)}</p>
      )} */}
    </div>
  );
};
export default Dustbin;
