import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import LeftArea from "./components/LeftArea";
import RightArea from "./components/RightArea";
import { initialTodos } from "./initalTodos";
import { Todo, ToggleComplete, AddTodo, DeleteTodo} from "./types";



const App: React.FC = () => {

    const [todos, setTodos] = useState<Array<Todo>>(initialTodos)
    //methods for changing todo items
    const toggleComplete: ToggleComplete = selectedTodo => {
        const updatedTodos = todos.map(todo => {
            if(todo === selectedTodo){
                return {...todo, complete: !todo.complete}
            }
            return todo
        });
        setTodos(updatedTodos)
    }
    const now = new Date();
    const time = `hour:${now.getHours} minute:${now.getMinutes} second:${now.getSeconds}`

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== '' &&
            setTodos([...todos, {text: newTodo, complete: false, createdTime: time}])
    }

    const deleteTodo: DeleteTodo = selectedTodo => {
        const newTodos = todos.filter(todo => {
            return todo !== selectedTodo
        })
        setTodos(newTodos)
    }
//right area is completed or done and left is where input will be and unchecked items will be. 
    return (
        <div className="app">
            <Header />
            <section className="main-area">
                <React.Fragment>
                    <LeftArea todos={todos.filter(x => x.complete !== true)} toggleComplete={toggleComplete} deleteTodo={deleteTodo} addTodo={addTodo}/>
                    <RightArea todos={todos.filter(x => x.complete === true)} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
                </React.Fragment>
            </section>
        </div>
    );
};

export default App;
