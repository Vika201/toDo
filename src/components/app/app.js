import React, {Component} from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: "Drink Coffee", important: true, id: 1},
            {label: "Make Awesome App", important: true, id: 2},
            {label: "Have a lunch", important: false, id: 3}
            ]
    }

    render() {

        return (
            <div className="todo-app container-fluid">
                <AppHeader/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                          className="i-todo-list"
                          onDeleted={(id) => {console.log('delete', id)}}/>
            </div >
        );
    }
}
