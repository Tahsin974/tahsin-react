import React from 'react';
import './User.css'

const User = (props) => {
    const {id, name , email ,address, company , website} = props.user
    return (
        <div className='user'>
            <h1>ID no:<span>    {id}</span></h1>
            <p>Name:<span>      {name}</span></p>
            <p>Email:<span>     {email}</span></p>
            <p>Company:<span>   {company.name}</span></p>
            <p>Address:<span>   {address.city},{address.street}</span></p>
            <p>Website:         <a href={website}>{website}</a></p>
            
        </div>
    );
};

export default User;