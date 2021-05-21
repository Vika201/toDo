import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        important: false,
        done: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
               done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const { label } = this.props;
        const {important, done} = this.state;

        let classNames = 'todo-list-item';
        if (important) {
            classNames += ' important'
        }
        if (done) {
            classNames += ' done'
        }


        return (
            <span className={classNames}>
            < span className = "todo-list-item-label"
                   onClick={this.onLabelClick}>
                    { label }
            </span >

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation" />
            </button>

             <button type="button"
                     className="btn btn-outline-danger btn-sm float-right"
                     onClick={this.props.onDeleted}>
                  <i className="fa fa-trash-o"
                 />
            </button>
        </span>
        );
    };
};
