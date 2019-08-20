import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
       axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => console.log(res.data))
        .catch(error => console.log(error.response)); 
    }

    render() {
        return (
            <div>
                <h2>Friends List will render here.</h2>
            </div>
        )
    }
}

export default FriendsList;