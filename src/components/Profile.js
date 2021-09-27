import React, { useState, useEffect } from 'react'
import api from '../services';

const Profile = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        api.users()
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    })

    return (
        <div className='home'>
            <nav className='navbar bg-black fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'><span style={{ color: 'red' }}>F</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'yellow' }}>D</span><span style={{ color: 'green' }}>S</span><span style={{ color: 'blue' }}>T</span><span style={{ color: 'orange' }}>O</span><span style={{ color: 'violet' }}>R</span><span style={{ color: 'white' }}>E</span></a>
                    </div>
                    <ul className='nav nav-pills'>
                        <li ><a className='nav-link text-light' href='/admin'>Home</a></li>
                        <li ><a className='nav-link text-light' href='/hotel/add'>Add Hotels</a></li>
                        <li ><a className='nav-link text-light' href='/recipe/add'>Add Recipe</a></li>
                        <li ><a className='nav-link active text-light' href='/profile'>Users</a></li>
                        <li ><a className='nav-link text-light' href='/login' onClick={() => sessionStorage.clear()}>Signout</a></li>
                    </ul>
                </div>
            </nav><br /><br /><br /><br />
            <div className="card">
                {data && data.map(user =>
                    <div className="card-body" key={user._id}>
                        <h5 className="card-title">Name : {user.firstName} {user.lastName} <br /></h5>
                        <h6 className="card-subtitle mb-2 text-muted">Email : {user.email}<br />Mobile : {user.phone}</h6>
                    </div>)}
            </div>
        </div>

    )
}

export default Profile