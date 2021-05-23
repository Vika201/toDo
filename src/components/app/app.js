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
    this.setState(({ todoData }) => {
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

    toggleProperties = (arr, id, prop) => {
            const idx = arr.findIndex(el => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem,
                            [prop]: !oldItem[prop]}

            return  [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
    };

    onToggleDone = (id) => {
       this.setState(({ todoData }) => {
           return {
               todoData: this.toggleProperties(todoData, id, 'done')
           }
       })

    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperties(todoData, id, 'important')
            }
        })
    }




    render() {
        const { todoData } = this.state;

        const done = todoData.filter(el => el.done === true).length;
        const todo = todoData.length - done;


        return (
            <div className="todo-app container-fluid">
                <AppHeader done={done}
                           toDo={todo} />
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                          className="i-todo-list"
                          onDeleted={(id) => this.onDeleted(id)}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}  />
                <ItemAddForm onAddedItem={this.onAddedItem}/>
            </div >
        );
    }
}
