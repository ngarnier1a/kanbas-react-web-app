import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
  const API = `${API_BASE}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const [todos, setTodos]: any = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: any) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t: any) => t.id !== todo.id));
  };

  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t: any) => (t.id === todo.id ? todo : t)));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API}>Get Todos</a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        type="number"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a href={`${API}/${todo.id}`}>Get Todo by ID</a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}>Get Completed Todos</a>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`}>Create Todo</a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}>Delete Todo with ID = {todo.id}</a>
      <h3>Updating an Item in an Array</h3>
      <input
        type="checkbox"
        value={todo.completed.toString()}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: Boolean(e.target.value),
          })
        }
      />
      <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
        Update Completion Status to {todo.completed}
      </a>{" "}
      <br />
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />{" "}
      <br />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title to {todo.title}
      </a>{" "}
      <br />
      <input
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />{" "}
      <br />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description to {todo.description}
      </a>
      <br />
      <textarea
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        value={todo.due}
        type="date"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />
      <label>
        <input
          value={todo.completed.toString()}
          type="checkbox"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        Completed
      </label>
      <button onClick={postTodo}> Post Todo </button>
      <button onClick={updateTodo}>Update Todo</button>
      <ul className="list-group">
        <button className="btn btn-primary" onClick={createTodo}>
          Create Todo
        </button>
        <button
          onClick={() => deleteTodo(todo)}
          className="btn btn-danger float-end ms-2"
        >
          Delete
        </button>
        <button className="btn btn-success" onClick={updateTitle}>
          Update Title
        </button>
        {todos.map((todo: any) => (
          <li key={todo.id} className="list-group-item">
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button
              className="btn btn-danger"
              onClick={() => fetchTodoById(todo.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-warning"
              onClick={() => removeTodo(todo)}
            >
              Remove
            </button>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;
