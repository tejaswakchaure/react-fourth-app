import { useState } from "react";

function App() {
  return (
    <>
      <h1>Registration page</h1>
      <MyRegisration />
    </>
  );
}

function MyRegisration() {
  let [succesBox, setSuccesBox] = useState(false);
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
    let uri = `http://127.0.0.1:4000/add?username=${user.username}&password=${user.password}&email=${user.email}&mobileNo=${user.mobileNo}`;
    await fetch(uri);

    let updateUser = { username: "", password: "", email: "", mobileNo: "" };
    setSuccesBox(true);
  };

  return (
    <>
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
        onChange={changeMobileNo}
      />

      <input
        className="form-control bg-primary"
        type="button"
        value="Registration"
        onClick={addUser}
      />

      {succesBox && <div className="alert alert-success">Opration Success</div>}
    </>
  );
}

export default App;
