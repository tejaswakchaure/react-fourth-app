import {useState,useRef} from "react";

function MyRegisration() {
  let formRef = useRef();
    let [succesBox, setSuccesBox] = useState(false);
    let [isError , setIsError] = useState(false);

    let [user, setUser] = useState({
      username: "",
      password: "",
      email: "",
      mobileNo: "",
    });
  
    let changeUsername = (e) => {
      let newUser = { ...user, username: e.target.value };
      setUser(newUser);
    };
  
    let changePassword = (e) => {
      let newUser = { ...user, password: e.target.value };
      setUser(newUser);
    };
  
    let changeEmail = (e) => {
      let newUser = { ...user, email: e.target.value };
      setUser(newUser);
    };
  
    let changeMobileNo = (e) => {
      let newUser = { ...user, mobileNo: e.target.value };
      setUser(newUser);
    };
  
    let addUser = async () => {

      try{
        formRef.current.classList.add("was-validated");
        let formStatus = formRef.current.checkValidity();
        if(!formStatus){
          return ;
        }
        let uri = `http://127.0.0.1:4000/add?username=${user.username}&password=${user.password}&email=${user.email}&mobileNo=${user.mobileNo}`;
        

        let res = await fetch(uri);

        if(res.status != 200){
          let serverMsg = await res.text();
          throw new Error(serverMsg);
        }
    
        let updateUser = { username: "", password: "", email: "", mobileNo: "" };
        setUser(updateUser);
        setSuccesBox(true);
        setTimeout(() => {
          setSuccesBox(false);
        },5000);
  
        formRef.current.classList.remove("was-validated");
        // alert("success");
        setSuccesBox(true);
      }
      catch(err){
        alert(err.message);
        setIsError(true);
      }finally{
        setTimeout( () => {
          setSuccesBox(false);
          setIsError(false);
        } ,5000);
      }
    };
  
    return (
      <>
      <form ref={formRef} className="need-validation" noValidate>
        <input
          className="form-control"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={changeUsername}
        />
  
        <input
          className="form-control"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={changePassword}
        />
  
        <input
          className="form-control"
          type="email"
          placeholder="email"
          value={user.email}
          onChange={changeEmail}
        />
  
        <input
          className="form-control"
          type="text"
          placeholder="mobile number"
          value={user.mobileNo}
          minLength={10}
          onChange={changeMobileNo}
        />
  
        <input
          className="form-control bg-primary"
          type="button"
          value="Registration"
          onClick={addUser}
        />     
      </form>
        {succesBox && <div className="alert alert-success">Opration Success</div>}
        {isError && <div className="alert alert-success">Error</div>}
      </>
    );
  }

  export default MyRegisration;