import './App.css';
import React, { useState } from 'react';
//Importing Components
import Form from './components/Form';
import ToDoList from './components/TodoList'

function App() {
  // All the States
  const[inputText, setInputText] = useState("");
  const[todos , setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h3>Kamal's Todo List </h3>
      </header>

      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}   />
      <ToDoList setTodos={setTodos} todos={todos}/>

    </div>
  );
}

export default App;
