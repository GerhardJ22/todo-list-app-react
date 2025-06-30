import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

uuidv4(); // Importing uuidv4 to generate unique IDs for todos

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
    // The addTodo function adds a new todo item to the todos state array.
    
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <TodoList task={todo} key={index} />
      ))}
    </div>
  )
}

export default TodoWrapper
