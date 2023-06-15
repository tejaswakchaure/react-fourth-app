function App() {
  return (
    <>
    {/* calling message dema */}
      <h1>Props Demo</h1>
      <MessageDemo />
    </>
  );

}
//Reusable + O/p is static
function MessageDemo() {
  return (
    <>
      <h1>Hello Message</h1>
    </>
  )
}

export default App;