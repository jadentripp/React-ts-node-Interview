import React from 'react'
import { DeleteTodo, Todo, ToggleComplete } from '../../types'
import { TodoListItem } from './TodoListItem'

interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
}
//component for list of items

export const TodoList: React.FC<TodoListProps> = ({todos, toggleComplete, deleteTodo}) => {
    return(
        <ul>
            {todos.map((todo) => 
                <TodoListItem
                key={todo.text}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}/>
            )}
        </ul>
    )
}