import React, {useState} from "react";
import ReactDOM from "react-dom";


function ToDoList() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');
  
	const addTask = () => {
	  if (newTask.trim() !== '') {
		setTasks([...tasks, newTask]);
		setNewTask('');
	  }
	};
  
	const deleteTask = (index) => {
	  const updatedTasks = [...tasks];
	  updatedTasks.splice(index, 1);
	  setTasks(updatedTasks);
	};
  
	return (
	  <div className="todo-app stack">
		<>
		<p className="list-title">To Do List</p> 
		<input
			type="text"
			placeholder="Add a task..."
			value={newTask}
			onChange={(e) => setNewTask(e.target.value)}
			onKeyDown={(e) => e.key === 'Enter' && addTask()}
		/>
	
		 <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span className="delete-icon" onClick={() => deleteTask(index)}>
              &#10006;
            </span>
          </li>
        ))}
      </ul>
		<p className="pending-complete">{tasks.length} tasks to complete</p>
		
		</>
	  </div>
	);
  }
  
  ReactDOM.render(<ToDoList />, document.querySelector("#app"));


export default ToDoList;
