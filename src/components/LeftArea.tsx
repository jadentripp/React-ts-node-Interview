import React from "react";
import { DeleteTodo, Todo, ToggleComplete, AddTodo } from "../types";
import { AddTodoForm } from "./TodoList/AddTodoForm";
import { TodoList } from "./TodoList/TodoList";

// on the left side of the screen the user needs to be able to add, delete, and see all the unchecked todo items

//todos in props should be filtered in app component to only include uncompleted items
interface LeftAreaProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
    addTodo: AddTodo;
}

const LeftArea: React.FC<LeftAreaProps> = ({todos, toggleComplete, deleteTodo, addTodo})=> {
    return(
        <main className="block col-2">
            <h2>Uncompleted</h2>
            <div className="row">
                <React.Fragment>
                    <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
                    <AddTodoForm addTodo={addTodo} />
                </React.Fragment>
            </div>
        </main>
    )

}

export default LeftArea



