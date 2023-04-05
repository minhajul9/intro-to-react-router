import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (

        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'active' : ''}
        >{children}
        </NavLink>

        //     <NavLink
        //     to={`contacts/${contact.id}`}
        //     className={({ isActive, isPending }) =>
        //       isActive
        //         ? "active"
        //         : isPending
        //         ? "pending"
        //         : ""
        //     }
        //   >
        //     {/* other code */}
        //   </NavLink>
    );
};

export default ActiveLink;