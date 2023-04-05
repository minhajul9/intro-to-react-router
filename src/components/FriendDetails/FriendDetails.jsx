import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>Details about this friend is here</h2>
            <h3>Name: {friend.name}</h3>
        </div>
    );
};

export default FriendDetails;