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
      <MessageDemo name="Tejas Wakchaure"  />
      {/* <MessageDemo message="hi" username:"tejas"/> */}
    </>
  );

}
//Reusable + O/p is static
//how to make dynamic..........??
//props :: destructure
//accepting unorder
function MessageDemo({username,email}) {
  console.log ("I am inside massageDemo");
  return (
    <>
      <h1>Hello {username} {email}</h1>
      
    </>
  )
}

export default App;