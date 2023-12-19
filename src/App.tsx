import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoList";

function App() {
    const tasks_1:Array<TaskType> = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'ES6/TS', isDone: false},
        {id: 3, title: 'React', isDone: false},
    ]
    const tasks_2 = [
        {id: 4, title: 'MEAT', isDone: true},
        {id: 5, title: 'FISH', isDone: true},
        {id: 6, title: 'WATER', isDone: true},
    ]
    return (
        <div className='App'>
            <TodoList title={'What to learn'} tasks={tasks_1}/>
            <TodoList title={'What to buy'} tasks={tasks_2}/>
        </div>
    )}

export default App;
