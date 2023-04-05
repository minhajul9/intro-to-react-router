import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;