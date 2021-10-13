import React from "react";
import { DeleteTodo, Todo, ToggleComplete } from "../types";
import { TodoList } from "./TodoList/TodoList";

//on the right side of the screen we list all the todo items which are completed
interface RightAreaProps{
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
}

const RightArea: React.FC<RightAreaProps> = ({todos, toggleComplete, deleteTodo}) => {
   
    
    return(
        <main className="block col-2">
        <h2>Completed</h2>
            <div className="row">
                <ul>
                    <React.Fragment>
                        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
                    </React.Fragment>
                </ul>
            </div>
       </main>
    )

}

export default RightArea;
