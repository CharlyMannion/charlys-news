import React, { Component } from 'react';

class LoginSetter extends Component {
    state = {
        author: ''
    }

    handleChange = (ev) => {
        const {value} = ev.target;
        console.log(value, "VALUE")
        this.setState({author: value});
        const {loginUser} = this.props;
        loginUser(value);
    }

    render() {
        return (
            <label htmlFor='user-drop-down'>
                Choose User:
                <select id="soruser-drop-downter" required onChange={this.handleChange}>
                    <option value="">select an option</option>
                    <option value="cooljmessy" onChange={this.handleChange}>cooljmessy</option>
                    <option value="tickle122" onChange={this.handleChange}>tickle122</option>
                    <option value="grumpy19" onChange={this.handleChange}>grumpy19</option>
                    <option value="jessjelly" onChange={this.handleChange}>jessjelly</option>
                    <option value="happyamy2016" onChange={this.handleChange}>happyamy2016</option>
                    <option value="weegembump" onChange={this.handleChange}>weegembump</option>
                </select>
            </label>
        )
    }
}

export default LoginSetter;

