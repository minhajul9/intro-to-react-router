import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post.id);

    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate(`/post/${post.id}`)
    }

    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigation}>Details using navigation</button>
        </div>
    );
};

export default Post;