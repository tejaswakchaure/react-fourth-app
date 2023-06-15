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

 let [list,setList ] = useState(["delhi"]);

 let addItemAction = () => {
  let updateList = [...list,"mumbai"];

   // DOM :: TRIGGER DOM
  setList(updateList);
 };

  return (
    <>
    <input type="button" value="Add new Item" onClick={addItemAction}/>
    <hr/>
   {list.map((item) => (
    <h1>{item} </h1>))}
    </>
  );
}

export default App;