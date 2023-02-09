import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState(["todo1"]);

  
 async function savetoLocal() {
    return  localStorage.setItem("Todos", JSON.stringify(...todos,input));
  }
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

        {todos.map((todo) => {
          return (
            <div className="p-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  <h4>{todo}</h4>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
