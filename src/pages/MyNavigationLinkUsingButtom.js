import { useNavigate } from "react-router-dom";

function MyNavigationLinksUsingButton(){
    const navigate = useNavigate();
  
    let goToHomeAction = () => {
      navigate("/home");
    }
  
    let goToRegistrationAction =() => {
      navigate("/registration");
    }
  
    return(
      <div>
      <input type="button" value="Home" onClick={goToHomeAction} />
      <input type="button" value="Registration"  onClick={goToRegistrationAction} />
      </div>
    );
  }
  export default MyNavigationLinksUsingButton;