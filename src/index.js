import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from "./components/item-status-filter";

const App = () => {

    const todoDate = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awersome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]

    return (
        <div>
            <AppHeader/>
            <div>
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos = { todoDate }/>
        </div >
    );
};

ReactDOM.render( <App/> ,
    document.getElementById('root'));