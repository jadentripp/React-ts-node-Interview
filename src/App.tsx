import React, {FC, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LeftArea from "./components/LeftArea";
import RightArea from "./components/RightArea";
import { initialTodos } from "./initalTodos";
import { Todo, ToggleComplete, AddTodo, DeleteTodo} from "./types";



const App: React.FC = () => {

    //so basically what I'm doing here is separating the true values from the untrue values so I can pass them as props to the left and right area components
    //I got an infinite loop after adding some of this stuff below down to line 30, but I'm not sure what seems to be the problem

    const [todos, setTodos] = useState<Array<Todo>>(initialTodos)
    const [uncompletedTodos, setUnCompletedTodos] = useState<Array<Todo>>([])
    const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([])

    const uncompleted = todos.filter(todo=>{
        return todo.complete !== true
    })
    setUnCompletedTodos(uncompleted)
        
    const completed = todos.filter(todo=>{
        return todo.complete === true
    })
    setCompletedTodos(completed)
    
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

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== '' &&
            setTodos([...todos, {text: newTodo, complete: false}])
    }

    const deleteTodo: DeleteTodo = selectedTodo => {
        const newTodos = todos.filter(todo => {
            return todo !== selectedTodo
        })
        setTodos(newTodos)
    }

    return (
        <div className="app">
            <Header />
            <section className="main-area">
                <React.Fragment>
                    <LeftArea todos={uncompletedTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} addTodo={addTodo}/>
                    <RightArea todos={completedTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
                </React.Fragment>
            </section>
        </div>
    );
};

export default App;
