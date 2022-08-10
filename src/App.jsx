import React from "react";
import ItemInput from "./components/ItemInput";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./redux/action";
import "./App.css";

function App() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const onDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="container">
      <h1>Todo</h1>
      <ItemInput />
      <hr />
      <ul>
        {items.map((val, index) => {
          return (
            <li key={index}>
              {val.name}
              <button onClick={() => onDeleteItem(val.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;