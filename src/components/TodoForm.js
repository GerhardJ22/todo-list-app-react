import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        addTodo(value); // Call the addTodo function passed as a prop

        setValue(''); // Clear the input field after adding the todo
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Add a new task...' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
export default TodoForm
