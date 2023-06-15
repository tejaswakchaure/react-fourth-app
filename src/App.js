function App() {
  return (
    <>
    {/* calling message dema */}
      <h1>Props Demo</h1>
      {/* this id=hi these are the atribute */}
      {/* attribute name is any valid name */}
      {/* user cann pass multiple paramete */}
      <MessageDemo/>
      <MessageDemo message="Hello"/>
      <MessageDemo username="tejas" email="tejas@gmail.com" mobileNo="9284671730"/>
      <MessageDemo username="CDAC" email="tejas@gmail.com" />
      <MessageDemo name="Tejas Wakchaure" email="tejas@gmail.com" />
      {/* <MessageDemo message="hi" username:"tejas"/> */}
    </>
  );

}
//Reusable + O/p is static
//how to make dynamic..........??
//props ==> destructure
//accepting unorder
function MessageDemo({name,email}) {
  console.log ("I am inside massageDemo");
  return (
    <>
      <h1>Hello {name} {email}</h1>
      
    </>
  )
}

export default App;