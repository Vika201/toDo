import React from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from "../item-status-filter";
import './app.css';

const App = () => {

    const todoDate = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awersome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]

    return (
        <div className="todo-app container-fluid">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList className="i-todo-list"
                      todos = { todoDate }/>
        </div >
    );
};

export default App;