import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>Users Available: {users.length}</h1>
            <div className="user-container">
                {
                    /* users.map(user => <User name = {user.name} email = {user.email} company = {user.company.name} website = {user.website}></User>) */

                    users.map(user => <User
                        key = {user.id}
                        user = {user} 
                    ></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;