import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    }

    login = event => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.payload);
                //props.history.push('/FriendsList');
            })
            .catch(error => console.log(error.response));
    }

    render() {
        return (
            <div className='login'>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
};

export default Login;

