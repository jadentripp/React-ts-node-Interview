export type Todo = {
    text: string;
    complete: boolean;
    createdTime: string;
}

export type ToggleComplete = (selectedTodo: Todo) => void;
export type AddTodo = (newTodo: string) => void;
export type DeleteTodo = (selectedTodo: Todo) => void;