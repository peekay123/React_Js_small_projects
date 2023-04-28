import React, {useState} from 'react'

export const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };

    const handleChange = (e) => {
      setValue(e.target.value)
    };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input 
    type="text" 
    value={value} 
    onChange={handleChange} 
    className="todo-input" 
    placeholder='Update task' 
    />
    <button 
    type="submit" 
    className='todo-btn'>
      Add Task
    </button>
  </form>
  )
}