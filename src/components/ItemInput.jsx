import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/action";

function ItemInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAddItem = () => {
    dispatch(addItem(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={inputValue} />
      <button onClick={onAddItem}>Add</button>
    </div>
  );
}

export default ItemInput;
