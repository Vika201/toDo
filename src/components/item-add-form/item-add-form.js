import React, {Component} from "react";
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddedItem(this.state.label);

        this.setState({
            label: ''
        })


    }

    render() {

        return (
            <form className="item-add-form input-group mb-3 d-flex"
                  onSubmit={this.onSubmit}>
                <input className="form-control"
                       onChange={this.onChange}
                       value={this.state.label}/>
                <button className="btn btn-outline-secondary"
                        type="submit">
                    Add Item
                </button>
            </form>

        )
    }
}

