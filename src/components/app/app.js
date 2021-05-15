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

    onDeleted = (id) => {
        this.setState(({ todoData }) => {
                const idx = todoData.findIndex(el => el.id === id);

                const newArray = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ]
            return {
                    todoData: newArray
            }
        })
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
                          onDeleted={(id) => this.onDeleted(id)}/>
            </div >
        );
    }
}
