import React, { useState } from "react";
import './index.css'
import Todo from "./Components/Todo"


const App = () => {

  const [inputItem, setInputItem] = useState('');
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputItem(event.target.value)
  };

  const change = () => {
    setItem((oldItem) => {
      return [...oldItem, inputItem];
    });
    setInputItem('')
  };

  const deleteItem = (id) => {
    console.log("deleted")
    setItem((oldItem) => {
      return oldItem.filter((arrElement, index) => {
        return index !== id;
      })
    });
  }

  return (
    <>
      <div className="container">
        <div className="mainContainer">
          <br />
          <h1>To-DO List</h1>
          <br />
          <input type="text" placeholder="Add Items" value={inputItem} onChange={itemEvent} />
          <button onClick={change}>+</button>

          <ol>
            {/* <li>{inputItem}</li> */}
            {item.map((itemVal, index) => {

              return <Todo text={itemVal} key={index} id = {index} onSelect ={deleteItem}  />

            })}
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;