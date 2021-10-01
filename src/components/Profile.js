import React, { useState, useEffect } from 'react'
import api from '../services';
import Navbar from './Navbar'

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
           <Navbar /><br /><br /><br /><br />
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