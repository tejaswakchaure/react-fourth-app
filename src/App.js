function App() {
  return (
    <>
      {/* calling message dema */}
      <h1>Props Demo</h1>
      <ListDemo />

    </>
  );

}

// function ListDemo() {
//   return (
//     <>
//       {/* this id=hi these are the atribute */}
//       {/* attribute name is any valid name */}
//       {/* user cann pass multiple paramete */}
//       <MessageDemo />
//       <MessageDemo message="Hello" />
//       <MessageDemo username="tejas" email="tejas@gmail.com" mobileNo="9284671730" />
//       <MessageDemo username="CDAC" email="tejas@gmail.com" />
//       <MessageDemo name="Tejas Wakchaure" />
//       {/* <MessageDemo message="hi" username:"tejas"/> */}

//     </>
//   )
// }

function ListDemo() {
  let data = "Hello Brother";
  let list = [ "delhi ", "mumbai" , "nashik"];

  // we can put value in empty array
  //let list = [];
  // for( let i=0;i<10;i++ ){
  //     list.push("Hello Tejas");
  // }
  console.log(list);

  return (

    <>
    {/* for loop */}

      <h1> {data} </h1>
      {/* forEach is consumer function ==> doesnt return any thing  */}
      {list.forEach((item) => item)}

      {/* Geting output of this map */}
      {/* map is take input and give output */}
      {list.map((item) => item)}
    </>
  );
}

export default App;