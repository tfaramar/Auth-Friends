import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <div className='login'>
                <h1>FORM WILL GO HERE</h1>
                {/* <form>
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
                    <button>Log in</button> */}
                {/* </form> */}

            </div>
        )
    }
};

export default Login;

