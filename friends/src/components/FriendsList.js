import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';
import FriendsForm from './FriendsForm';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(error => console.log(error.response));
    }

    render() {
        return (
            <div className='friends-container'>
                <div className='friends-list'>
                    <h2>Lambda School Friends:</h2>
                    {this.state.friends.map(friend => {
                        return <Friend key={friend.id} name={friend.name} email={friend.email} />
                    })}
                </div>
                <FriendsForm />
            </div>

        )
    }
}

export default FriendsList;