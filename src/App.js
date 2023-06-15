function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo />

    </>
  );

}


function ListDemo() {
  let data = "Hello Brother";
  let list = [" ", "", "",""];
  let list1 = [];

  for(let i=0; i<10; i++){
    list1.push("hey bro!");
  }

  //console.log(list1);

  return (
    <>

      <h1>{data}</h1>

      {list1.map((item) => (
        <div>
          <h1>Hello Universe</h1>
        </div>
      ))}

      <hr/>
      {list.map((item) => (
        <div>
          <h1>Hello </h1>
        </div>
      ))}


    </>
  );
}

export default App;