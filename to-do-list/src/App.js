// src/App.js

/*
first, we have the import statements: import React, { useState } from 'react';:
this line imports the React library and the useState hook from the 'react' package.
useState is used to manage state within a functional component.

import TaskList from './TaskList';:
this line imports a custom component named 'TaskList' from a file named 'TaskList.js'.
this component is used to display the list of tasks.

*/

import React, { useState } from 'react';
import './App.css';
import TaskList from '..src/taskList';



/*
const [tasks, setTasks] = useState([]);:
this line uses the useState hook to declare a state variable called 'tasks' and its corresponding setter function
'setTasks'. the initial value of 'tasks' is an empty array ([]).
this array will store the list of tasks.}


const [newTask, setNewTask] = useState('');:
similarly, this line declares another state variable called 'newTask' and its setter function 'setNewTask'
with an initial value of an empty string ('').
this variable will be used to capture the input for a new task.

*/


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

/*

deleteTask function:

deleteTask is a function that is called when a task needs to be deleted. It takes 'taskToDelete' as an argument.

it filters the 'tasks' array to create a new array ('updatedTasks') that doesn't include the 'taskToDelete'.
this effectively removes the specified task from the list.

it then updates the 'tasks' state with 'updatedTasks' using setTasks.

*/



  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };


/* 

the return statement contain jsx (html-like syntax), which is used to define the structure and lay out of the
components ui.

it render a heading ('tasklist') and a form-like input where users can add new tasks.

an input field captures the task description and the add button calls the addTask function when I click it.

it also renders  tasklist_component, passing in the task array and delete task function as props.

*/

  return (
    <div className="App">
      <h1>Task List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

/* finally, the 'App' component is exported as the default export so
that it can be used in other parts of the application. */

export default App;
