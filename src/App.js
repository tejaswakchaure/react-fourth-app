import { useState } from "react";

function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo />

    </>
  );

}


function ListDemo() {

  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {

    let inputRef = document.querySelector("#id1");
    let inputValue = inputRef.value;

    let updateList = [inputValue, ...list, "mumbai"];

    // DOM :: TRIGGER DOM
    setList(updateList);

    inputRef.value = "";
  };

  return (
    <>
      <input type="text" id="id1" placeholder="Enter user input........" />
      <input type="button" value="Add new Item" onClick={addItemAction} />
      <hr />

      {list.map((item) => (
        <h1>{item} </h1>))}
    </>
  );
}

export default App;