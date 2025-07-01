import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [input, setinput] = useState("")

  function add() {
    if (input.trim() === "") {
      alert("add something");
      return;
    } else {
      const container = document.querySelector('.todos');
      const todoDiv = document.createElement('div');
      todoDiv.className = 'todo1';

      const descDiv = document.createElement('div');
      descDiv.className = 'todo_description';

      const p = document.createElement('p');
      p.textContent = input;

      descDiv.appendChild(p);
      todoDiv.appendChild(descDiv);
      container.appendChild(todoDiv);

      setinput(""); 
    }
  }

  return (
    <>
      <div className="todo_container">
        <div className="todo_heading">
          <h2> TODO LIST </h2>
        </div>

        <div className="smth">
          <div className="main_todo_content">
            <div className="heading">
              <p>Add a new todo here:</p>
            </div>
            <input
              type="text"
              className="todo_input"
              placeholder="Type your todo..."
              value={input}
              onInput={(e) => setinput(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="svg"
              onClick={add}
            >
              <polyline
                points="8,18 14,24 26,10"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </div>
        </div>

        {/* ✅ Add the todos container */}
        <div className="todos"></div>
      </div>
    </>
  )
}
