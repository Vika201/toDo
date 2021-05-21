import React, {Component} from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Have a lunch")
            ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    onAddedItem = (text) => {
    this.setState(({todoData}) => {
        const newItem = this.createTodoItem(text)

        const newArr = [
            ...todoData,
            newItem
        ]
        return {
            todoData: newArr
        }
    })
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
                <ItemAddForm onAddedItem={this.onAddedItem}/>
            </div >
        );
    }
}
