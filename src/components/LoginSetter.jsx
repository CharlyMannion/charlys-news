import React, { Component } from 'react';
import {getUserByUsername} from '../utils/api';
import ErrorDisplay from '../components/ErrorDisplay';

class LoginSetter extends Component {
    state = {
        author: ''
    }

    handleChange = (ev) => {
        const {setFullUser} = this.props
        const {value} = ev.target;
        getUserByUsername(value).then((res) => {
            const foundUser = res.data.user
            this.setState({author: foundUser});
            setFullUser(foundUser)
        })
        .catch(({response}) => {
            this.setState({
                error: {
                    status: response.status,
                    message: response.data.msg,
                }
            })
        })
    }

    render() {
        const {error} = this.state;
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        return (
            <label className="user-displayer" htmlFor='user-drop-down'>
                Choose User:
                <select className="select" id="soruser-drop-downter" required onChange={this.handleChange}>
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

