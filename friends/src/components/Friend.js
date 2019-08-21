import React from 'react';

const Friend = (props) => {
    return (
        <div className='friend-card'>
            <h3>{props.name}</h3>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Friend;