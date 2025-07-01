import { useState } from 'preact/hooks';
import './app.css';

export function App() {
  const [input, setinput] = useState('');
  const [check, setCheck] = useState(true); // toggle view
  const [todos, setTodos] = useState([]);

  function completed() {
    setCheck(!check);
  }

  function done(index) {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  }

  function add() {
    if (input.trim() === '') {
      alert('add something');
      return;
    } else {
      setTodos([...todos, { text: input, completed: false }]);
      setinput('');
    }
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
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

        <div className="completed_tasks" onClick={completed}>
          <div className="svg_tasks">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div>
            <p>Click here to {check ? "view completed" : "view active"} tasks</p>
          </div>
        </div>

        {/* Active Todos */}
        <div
          className="todos"
          style={{
            display: check ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {todos
            .filter((todo) => !todo.completed)
            .map((todo, idx) => (
              <div className="todo1" key={idx}>
                <div className="todo1_desc">
                  <p>{todo.text}</p>
                </div>
                <div className="contains">
                  <div className="completed_task" onClick={() => done(idx)}>
                    {/* Check mark icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <polyline
                        points="4,12 10,18 20,6"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="delete_todo" onClick={() => deleteTodo(idx)}>
                    <svg width="32" height="32" viewBox="0 0 24 24">
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
            ))}
        </div>

        {/* Completed Todos */}
        <div
          className="completed_tasks"
          style={{
            display: check ? 'none' : 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent:"space-between"
          }}
        >
          {todos
            .filter((todo) => todo.completed)
            .map((todo, idx) => (
              <div className="todo1" key={idx} style={{justifyContent:'space-between'}}>
                <div className="todo1_desc">
                  <p style={{ textDecoration: 'line-through', opacity: 0.6 }}>{todo.text}</p>
                </div>
                <div className="contains">
                  <div className="completed_task" style={{justifyContent:"space-between"}} onClick={() => done(idx)}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <polyline
                        points="4,12 10,18 20,6"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="delete_todo" onClick={() => deleteTodo(idx)}>
                    <svg width="32" height="32" viewBox="0 0 24 24">
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
            ))}
        </div>
      </div>
    </>
  );
}
