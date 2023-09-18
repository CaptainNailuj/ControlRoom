// src/components/TodoBoard.js
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

function TodoBoard() {
  return (
    <div className="todo-board">
      <Droppable droppableId="in-progress">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="column"
          >
            <h2>In Progress</h2>
            {/* Add your task items here */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="finished">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="column"
          >
            <h2>Finished</h2>
            {/* Add your task items here */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TodoBoard;
