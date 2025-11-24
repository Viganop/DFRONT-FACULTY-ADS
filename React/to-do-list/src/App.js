import React, { useState } from 'react';
import TodoList from "./TodoList";

export default function App(){
  const [visivel, setVisivel] = useState(true);
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [datadia, setDatadia] = useState("");
  const [hora, setHora] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: newTask,
      date: datadia,
      hora: hora
    }

    setTodos([...todos, newTodo]);
    setNewTask("");
    setDatadia("");
    setHora("");
  }

  const removeTask = (id) => (
    setTodos(todos.filter((todo) => todo.id !== id))
  );

  const showList = () => {
    setVisivel(!visivel);
  }

  return(
    <div style={styles.container}> 
      <h1>Minha To-Do List</h1>
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask}>Adicionar</button>
        <button onClick={showList}>Lista</button>
      </div>
      <div marginTop="20">
        <input
          type="time"
          placeholder=''
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          style = {styles.inputdh}
        />
        <input
          type="date"
          placeholder='Digite/Escolha uma data'
          value={datadia}
          onChange={(e) => setDatadia(e.target.value)}
          style={styles.inputdh}
        />
      </div>

      <div
        style={{
          height: "500px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      > 
        {
          visivel && <TodoList todos = {todos} removeTask = {removeTask}/>
        }
      </div>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  inputdh: {
    padding: "10px",
    width: "39%",
    marginRight: "5px",
    borderRadius: "10px"
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "5px"
  },
  button: {
    padding: "10px",
    cursor: "pointer"
  }
}
