import React, { useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "../Dustbin";
import Box from "../Box";
import ItemTypes from "../ItemTypes";
import update from "immutability-helper";
const Container = () => {
  const [dustbins, setDustbins] = useState([
    {
      accepts: [
        ItemTypes.PAPER,
        NativeTypes.FILE,
        ItemTypes.NUM,
        ItemTypes.BIR
      ],
      lastDroppedItem: null
    }
  ]);
  
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item.name //Xét giá trị xuất value trên box tại đây
            }
          }
        })
      );
    },
    [droppedBoxNames, dustbins]
  );
  return (
    <div>
                <div style={{ overflow: "hidden",
                 clear: "both",
                 display:"flex",
                 flexDirection:"row",
                 marginLeft:"15px",
                 alignItems:"center"
                  }}>
                    {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                    <Dustbin
                        accept={accepts}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={item => handleDrop(index, item)}
                        key={index}
                    />
                    ))}
                </div>

                    
            
        </div>
    
  );
};
export default Container;
