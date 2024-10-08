import React from 'react';
import { useEffect,useState } from 'react';
import{Link} from 'react-router-dom'
import './style.css'

const UserList = () => {
const [users, setUsers]= useState([])
const [loading, setLoading] = useState (true)

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        setUsers(data)
        setLoading(false)

    })
},[])
if (loading){
    return <div className='loader'></div>

}
    return (
        <div>
            <h1>UserList</h1>
            <ul>
                {
                    users.map(user=>(
                        <li key ={user.id}>
                            <Link to={`/user/${user.id}`}>{user.username}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default UserList;
