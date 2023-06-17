import { Link } from "react-router-dom";
function MyNavigationLink() {
    return (
      <>
        <Link to={"/home"}>Home |</Link>
        <Link to={"/registration"}>registration |</Link>
        <Link to={"/userList"}>User List |</Link>
      </>
    );
  }


  export default MyNavigationLink;