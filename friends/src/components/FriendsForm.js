import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsForm extends React.Component {

    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        }
    };

    handleChange = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        });
    }

    submit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', this.state.friend)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => console.log(error.response));
    }

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendsForm;