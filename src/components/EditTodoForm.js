import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task); // Initialize state with the current task value  

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        editTodo(value, task.id); // Call the editTodo function passed as a prop with the new value and task ID

        setValue(''); // Clear the input field after adding the todo
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update task...' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
export default EditTodoForm
