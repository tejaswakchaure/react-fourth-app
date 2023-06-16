import { useState } from "react";

function MyUserList() {
  let [user, setUser] = useState([]);

  let getAllTodoAction = async () => {
    let url = `http://localhost:4000/read`;
    let res = await fetch(url);
    let userList = await res.json();

    // list updated.
    let newUserlist = [...userList];
    setUser(newUserlist);
  };

  return (
    <>
      <h1>Display All Todo</h1>
      <input
        type="button"
        value="Get All Data from Server"
        onClick={getAllTodoAction}
      />

      {user.map((item) => (
        <>
          <div className="alert alert-secondary mb-1">
            {item.username} <p>{item.email}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default MyUserList;