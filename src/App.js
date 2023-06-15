import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["I am best"]);
  let[counter,setCounter] = useState(0);
  let[counter2,setCounter2] = useState(0);

  let addItemAction = () => {
    // console.log(inputRef.current);
    // console.log(document.querySelector("#id1"));

    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];
    setList(newList);

    inputRef.current.value = "";
  };

  let Likeme = () =>{
    counter = counter +1;
    setCounter(counter);
    
  };
  let disLikeMe = () =>{
    counter2 = counter2 +1;
    setCounter2(counter2);
    
  };
  return (
    <>
      <input
        type="text"
        id="id1"
        ref={inputRef}
        placeholder="Enter user input..."
      />
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {list.map((item) => (

        <div>
          <h1>{item}</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            sit laborum quia non hic doloribus id quisquam consequuntur quis
            iusto quod, assumenda vitae, molestias ipsa ex labore quaerat
            ducimus accusamus.
          </p>
          <div>
            {counter}&nbsp;<input type="button" value="&#128077;" onClick={Likeme} />
            &nbsp;&nbsp;&nbsp;
            {counter2}&nbsp;<input type="button" value="&#128078;" onClick={disLikeMe}/>
            <hr/>
          </div>
        </div>


      ))}
    </>
  );
}

export default App;