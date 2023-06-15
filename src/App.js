import {useRef , useState } from "react";

function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo />

    </>
  );

}


function ListDemo() {
  // useRef is  hook command
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {

    // for DOM opration React use useref method for taking or finding tag
    // let inputRef = document.querySelector("#id1");
    let inputValue = inputRef.current.value;

    let updateList = [inputValue, ...list, "mumbai"];

    // DOM :: TRIGGER DOM
    setList(updateList);

    inputRef.value = "";
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Enter user input........"/>
      <input type="button" value="Add new Item" onClick={addItemAction} />
      <hr />

      {list.map((item) => (
        <h1>{item}</h1>))}
    </>
  );
}

export default App;