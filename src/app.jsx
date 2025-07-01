import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [input, setinput] = useState("")

  function add() {
    if (input.trim() === "") {
      alert("add something");
      return;
    } else {
      document.querySelector('.todos').insertAdjacentHTML('beforeend', `
  <div class="todo1">
    <div class="todo1_desc">
      <p>${input}</p>
    </div>
    <div class="delete_todo">
      <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="6" width="14" height="14" fill="#FF3B3B" rx="1" ry="1" />
        <rect x="7" y="8" width="2" height="10" fill="black" />
        <rect x="11" y="8" width="2" height="10" fill="black" />
        <rect x="15" y="8" width="2" height="10" fill="black" />
        <rect x="9" y="2" width="6" height="2" fill="#FF3B3B" />
        <rect x="8" y="4" width="8" height="2" fill="#FF3B3B" />
      </svg>
    </div>
  </div>
`);

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

        
        <div className="todos">
         {/* ✅ Add the todos container */}
        </div>
      </div>
    </>
  )
}
