import React, { useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "../Dustbin";
import Box from "../Box";
import "../Example/box.css";
import ItemTypes from "../ItemTypes";
import update from "immutability-helper";
import {Button, Form, FormGroup, Col, InputGroup,InputGroupAddon,Input} from 'reactstrap';

const Container = () => {
  const [dustbins, setDustbins] = useState([
   
    {
      accepts: [
        ItemTypes.PAPER,
        ItemTypes.GLASS,
        NativeTypes.URL,
        ItemTypes.FNAME
      ],
      lastDroppedItem: null
    },
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
  const [boxes,setBoxes] = useState([
    { name: "Bottle", type: ItemTypes.GLASS },
    { name: "Banana", type: ItemTypes.FOOD },
    { name: "Magazine", type: ItemTypes.PAPER },
    { name: "Doan", type: ItemTypes.FNAME },
    { name: "13/03/1996", type: ItemTypes.BIR },
    
  

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

  const [value, setValue] = useState("");
  const onChange = e => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <div>
        <div className="scroll-full-screen">
            <div className="row form-group">
              <Form action="" method="post" className="form-horizontal">
                    <FormGroup row>
                      <Col md="12">
                        <InputGroup>
                          <Input type="text" id="input1-group2" name="input1-group2" placeholder="Username" value={value} onChange={onChange} />
                          <InputGroupAddon addonType="prepend">
                            <Button type="button" color="success"
                             onClick={() =>{
                               if(value !== ""){
                                setBoxes([{ name: value, type: ItemTypes.GLASS },...boxes])
                               }
                               setValue("")
                             }}>
                             <i className="fa fa-plus"></i> Thêm</Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
              </Form>
              </div>  
                <div className="box-scroll">
                    {boxes.map(({ name, type }, index) => (
                    <Box name={name} type={type} key={index} />
                    ))}
                </div>
            </div> 
    </div>
  );
};
export default Container;
