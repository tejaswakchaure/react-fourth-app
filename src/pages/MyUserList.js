import { useState, useEffect } from "react";

function MyUserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllRegistration();
  }, []);//spacial method like constructer and initilise

  let getAllRegistration = async () => {
    let uri = "http://127.0.0.1:4000/read";
    let res = await fetch(uri);
    let list = res.json();

    let updatedList = [...list];
    setUserList(updatedList);

  };

  return (
    <>
      <h1>User List</h1>
      {/* <input type="button" value="click here to get data ...." onChange={getAllRegistration} /> */}

      {userList.map((item) => (
        <>
          <div>
            {item.username} {item.password} {item.email} {item.mobileNo}
          </div>
        </>
      ))}
    </>
  );
}


export default MyUserList;