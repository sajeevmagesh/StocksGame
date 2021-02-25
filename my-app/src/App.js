import React, {useState} from "react" ;
import TodoList from "./TodoList"
function App() {
  const [todos, setTodos]= useState(["todo 1", "todo 2"]);
  return (
    <>
      <TodoList todos={todos}/>
      <input></input>
      <button onClick>Submit</button>
    </>
  );
}

export default App;
