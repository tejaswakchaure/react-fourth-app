
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MyRegisration from "./pages/MyRegisration";

function App() {
  return (
    <>
      <BrowserRouter>
      <Link to={"/home"}>Home</Link>
      <Link to={"/registration"}>registration</Link>


      <Routes>
        <Route path="/" element={<h1>Hello</h1>}/>
        <Route path="/home" element={<h1>Home</h1>}/>
        <Route path="/registration" element={<MyRegisration/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
