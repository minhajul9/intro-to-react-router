import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>

        </nav>
    );
};

export default Navbar;