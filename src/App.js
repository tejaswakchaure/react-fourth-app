function App() {
  return (
    <>
    {/* calling message dema */}
      <h1>Props Demo</h1>
      {/* this id=hi these are the atribute */}
      {/* attribute name is any valid name */}
      <MessageDemo/>
      <MessageDemo message="Hello"/>
      <MessageDemo username="tejas"/>
      <MessageDemo username="CDAC"/>
      <MessageDemo name="Tejas Wakchaure"/>
      {/* <MessageDemo message="hi" username:"tejas"/> */}
    </>
  );

}
//Reusable + O/p is static
//how to make dynamic..........??
function MessageDemo(Props) {
  console.log ("I am inside massageDemo",Props);
  return (
    <>
      <h1>Hello {Props.username}</h1>
      <h1>Hello {Props.name}</h1>
    </>
  )
}

export default App;