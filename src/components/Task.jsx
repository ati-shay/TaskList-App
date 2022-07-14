import React from "react";
import { TodoItem } from "./TaskItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Check List</h3>
      {props.todos.length === 0
        ? "No Todos to display!"
        : props.todos.map((todo) => {
            return (
             (
              <div  key={todo.sno}>
              <TodoItem
               
                todo={todo}
                onDelete={props.onDelete}
              ></TodoItem>
              <hr />
              </div>
              )
            );
          })}
    </div>
  );
};

export default Todos;
