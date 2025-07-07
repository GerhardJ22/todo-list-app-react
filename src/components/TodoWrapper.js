import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import EditTodoForm from './EditTodoForm';

uuidv4(); // Importing uuidv4 to generate unique IDs for todos

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
    // The addTodo function adds a new todo item to the todos state array.
    
    const toggleComplete = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, task: task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
      <h1>My Todo Lists</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
        <TodoList task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
      )
      ))}
    </div>
  )
}

export default TodoWrapper
