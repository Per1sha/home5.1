import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css'



const UserDEtails = () => {
const [user, setUser]= useState(0)
const {id}=useParams()
const [loading, setLoading] = useState (true)

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json())
    .then(data=>{
        setUser(data)
        setLoading(false)

    })
},[id])
    if (loading){
        return <div className='loader'></div>

    }
    return (
        <div>
            <h1>UserDEtails</h1>
            {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        )}
        <Link to="/">Go Home</Link>
        </div>
    );
}

export default UserDEtails;
