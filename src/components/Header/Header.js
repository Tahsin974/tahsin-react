import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/Home">Home</a>
                <a href="/Users">Users</a>
                <a href="/About">About Us</a>
            </nav>
        </div>
    );
};

export default Header;