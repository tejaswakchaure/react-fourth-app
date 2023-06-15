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
  let list = ["delhi ", "mumbai", "nashik"];

  return (
    <>

      {/* Geting output of this map */}
      {/* map is take input and give output */}

      <h1>{data}</h1>

      {/* version 1 */}
      {list.map((item) => (
        <>
          <h1>Hello {item}</h1>
        </>

      ))}
      <hr />
       {/* version 2 */}
      {list.map((item) => "Hello" + item)}
      <hr />
       {/* version 3 */}
      {list.map((item) => item)}
    </>
  );
}

export default App;