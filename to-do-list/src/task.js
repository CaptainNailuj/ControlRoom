// src/Task.js

import React from 'react';


/* with function task I define a component named task, this component will take 2 props as input: task and ondelete
the props, props allow me to send information from one of these parts to another. */

function Task({ task, onDelete }) {
    /* here i define the component return statement,
     this is javascript code that represent the structure and content of each 'task'
    component instance */

    return (
        /*  this <p> element displays the task prop's value.
        the task prop is a string that represents the content of the task */
        /*the button element with an onClick event handler. when the button is clicked,
         it invokes the onDelete function (which is passed as a prop) with the task prop as an argument
        this allows the parent component to handle the deletion of this specific task.  */
        <div className="task">
            <p>{task}</p>
            <button onClick={() => onDelete(task)}>Delete</button>
        </div>
    );
}

/*just to end, the Task component is exported as the default export of this module.
 this means that other parts of the application can import and use the Task component */

export default Task;



