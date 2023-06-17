import { BrowserRouter, Route, Routes} from "react-router-dom";
import MyRegisration from "./pages/MyRegisration";
// import MyNavigationLink from "./pages/MyNavigationLink";
import MyNavigationLinksUsingButton from "./pages/MyNavigationLinkUsingButtom";
import MyUserList from "./pages/MyUserList";


function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavigationLinksUsingButton />
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/registration" element={<MyRegisration />} />
          <Route path="/userList" element={<MyUserList/>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
