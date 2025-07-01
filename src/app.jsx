import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [input, setinput] = useState("")
  const [check, setCheck] = useState(false);

function completed() {
  setCheck(!check);
}

  function add() {
    if (input.trim() === "") {
      alert("add something");
      return;
    } else {
      document.querySelector('.todos').insertAdjacentHTML('beforeend', ``);
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


        <div className="todos" style={{ display: check ? "none" : "flex" }}>
          <div class="todo1">
            <div class="todo1_desc">
              <p>hi</p>
            </div>
            <div className="contains">
            <div className="completed_task">
              <svg width="24" height="24" onClick={completed} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="13" width="2" height="2" fill="white" />
                <rect x="4" y="15" width="2" height="2" fill="white" />
                <rect x="6" y="17" width="2" height="2" fill="white" />
                <rect x="8" y="15" width="2" height="2" fill="white" />
                <rect x="10" y="13" width="2" height="2" fill="white" />
                <rect x="12" y="11" width="2" height="2" fill="white" />
                <rect x="14" y="9" width="2" height="2" fill="white" />
                <rect x="16" y="7" width="2" height="2" fill="white" />
              </svg>

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
          </div>
        </div>
      </div>
    </>
  )
}
