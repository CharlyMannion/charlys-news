import React, { Component } from 'react';

class LoginSetter extends Component {
    state = {
        author: ''
    }

    handleChange = (ev) => {
        const {value} = ev.target;
        this.setState({author: value, error: null});
    }

    handleSubmit = (ev) => {
        const {loginUser} = this.props;
        const {author} = this.state;
        ev.preventDefault();
        loginUser(author);
        this.setState({author: ''});
    }

    render() {
        const {author} = this.state;
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>
                    <input onChange={this.handleChange} name="body" type="text" value={author} required />
                </label>
                <input type="submit" value="Login" />
            </form>
        )
    }
}

export default LoginSetter;

