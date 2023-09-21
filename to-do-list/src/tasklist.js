// src/TaskList.js

/* Task is imported from a local file called './Task'. 
This implies that there is another React component defined in the 'Task.js' file,
 and it's being used within the TaskList component. */

import React from 'react';
import Task from './task';


/*  TaskList is a functional React component that takes two props as arguments: tasks and onDelete.
    tasks is expected to be an array of task objects, 
    and onDelete is expected to be a function that will be used to delete tasks. */


function TaskList({ tasks, onDelete }) {
    
    /* 
    This part of the code defines the JSX markup that will be
    rendered when the TaskList component is used in a React application.
    
    It starts with a <div> element with a class name of "task-list," which is used for styling purposes.
    
    Inside the <div>, there is a JavaScript expression enclosed in curly braces {}.
    This expression maps over the tasks array using the .map() function.
    For each task in the tasks array, it renders a <Task> component. The <Task> component is passed three props:


          key: This is set to the index of the task, which helps React efficiently update the component when the tasks change.

          task: The task object from the tasks array is passed as a prop to the <Task> component.

          onDelete: The onDelete function is also passed as a prop to the <Task> component, 
          which likely allows the child component to trigger the deletion of a task when needed.

    */
    
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default TaskList;


/*
TaskList component is responsible for rendering a list of tasks, where each task is represented by the <Task> component.

The tasks prop is used to pass in an array of tasks, and the onDelete prop is used to pass
a function that handles task deletion. 

*/