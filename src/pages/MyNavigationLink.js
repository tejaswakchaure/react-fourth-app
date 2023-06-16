import { Link } from "react-router-dom";


function MyNavigationLink() {
    return (
      <>
        <Link to={"/home"}>Home |</Link>
        <Link to={"/registration"}>registration |</Link>
        <link to={"/read"}>Register User |</link>
      </>
    );
  }


  export default MyNavigationLink;