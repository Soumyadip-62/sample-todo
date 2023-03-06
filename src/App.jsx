import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);

  // TODO: FOR Students:-> 
  //! 1. clear input field after adding todo 
  //! 2. create two different lists one for completed tasks and other for incompleted tasks
// const [todoInput, settodoInput] = useState({
//   task: "",
//   date: "",
//   isComplete: false
// })
  async function savetoLocal() {
    localStorage.setItem("Todos", JSON.stringify([...todos, input]));
    settodos([...todos, input]);
  }

  // async function removeFromLocal(todo){
     
  //     let todoList = todos.filter((t)=> todo !=t);
  //     settodos(todoList)
  //   localStorage.setItem("Todos", JSON.stringify([...todoList]));
      
    
  // }

  function handleRemove(todo) {
    console.log(todo);
    // todo = todo3
    let filteredTodo = todos.filter(function(t){
     return todo !=t
    })
    // console.log(filteredTodo)
    settodos(filteredTodo)
    localStorage.setItem("Todos", JSON.stringify([...filteredTodo]))
  }

  useEffect(() => {
    let todoList = JSON.parse(localStorage.getItem("Todos"));
    settodos(todoList);
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="p-2 m-1 row gap-3">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="p-2 col-6"
            type="text"
            placeholder="Add Your Todos"
          />
          <button
            onClick={() => savetoLocal()}
            className="col-4 btn btn-primary"
          >
            Add
          </button>
        </div>

        {todos ? todos.map((todo) => {
          return (
            <div key={todo} className="p-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onChange={()=> handleRemove(todo)}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <h4>{todo}</h4>
                </label>
              </div>
            </div>
          );
        }): <h3 className="text-center">No todos added</h3>} 
      </div>
    </div>
  );
}

export default App;
