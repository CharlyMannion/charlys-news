import React, { Component } from 'react';

class Sorter extends Component {
    state = {
        sortValue: '',
    };

    handleChange = (ev) => {
        const {value} = ev.target;
        const {addSort} = this.props;
        addSort(value);
    }

    render() {
        return (
            <label htmlFor='sorter'>
                Sort by:
                <select className="select" id="sorter" required onChange={this.handleChange}>
                    <option value="">select an option</option>
                    <option value="comment_count" onChange={this.handleChange}>Most Comments</option>
                    <option value="votes" onChange={this.handleChange}>Most Votes</option>
                    <option value="created_at" onChange={this.handleChange}>Date</option>
                </select>
            </label>
        )
    }
}

export default Sorter;