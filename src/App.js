import { useRef ,useState } from "react";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <MyTodo />
    </>

  );
}

function MyTodo() {
  let [succesBox , setSuccesBox] =useRef(false);
  let [todo,setTodo] = useState({task:"",description : ""});
  
  let changeTaskAction = (e) => {
    let newTodo = {...todo,task :e.target.value};
    setTodo(newTodo);
  };
   
  let changedescriptionAction = (e) => {
    let newdescription = {...todo,description :e.target.value};
    setTodo(newdescription);
  }

  let addTodoAction = async() => {
    //console.log(todo);

    let uri = `http://127.0.0.1:4000/add?task=${todo.task}&description=${todo.description}`;
    await fetch(uri);

    let newTodo = {task:"",description : ""};

    setSuccesBox(true);
  }

  return (
    <>
    <input  className="form-control" type="text" placeholder="enter todo here......" value={todo.task}  onChange={changeTaskAction}/>


    <textarea  className="form-control"  cols="30" rows=" 3 " placeholder="Enter Discription" value={todo.discription} onChange={changedescriptionAction}></textarea>


    <input  className="form-control" type="button" value="Add Todo" onClick={addTodoAction} />

    {succesBox && (
      <div className="alert alert-success">Opration Success</div>
    )}
    </>
    
  );
}

export default App;