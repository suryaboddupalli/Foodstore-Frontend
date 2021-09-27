import React, { useEffect, useState } from 'react'
import api from '../services'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        api.hotels()
            .then(res => setData(res.data))
    }, [])

    return (
        <div className='home'>
            <nav className='navbar bg-dark fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'><span style={{ color: 'red' }}>F</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'yellow' }}>D</span><span style={{ color: 'green' }}>S</span><span style={{ color: 'blue' }}>T</span><span style={{ color: 'orange' }}>O</span><span style={{ color: 'violet' }}>R</span><span style={{ color: 'white' }}>E</span></a>
                    </div>
                    <ul className='nav nav-pills'>
                        <li ><a className='nav-link active  text-light' href='/'>Home</a></li>
                        <li ><a className='nav-link text-light' href='/register'>Register</a></li>
                        <li ><a className='nav-link text-light' href='/login'>Login</a></li>
                    </ul>
                </div>
            </nav><br /><br />
            <div className='container mt-5' >
                <div className='card'>
                    {data.map((hotel) => <div className='row' key={hotel._id}>
                        <div className='col-lg-4'>
                            <img src={`./uploads/${hotel.hotelImg}`} className='img-fluid' alt={hotel.hotelImg} style={{ width: 600, height: 180 }} />
                        </div>
                        <div className='col-lg-8 px-5' >
                            <h2>{hotel.hotelName} </h2>
                            <h6>{hotel.locality}</h6>
                            <p>{hotel.hotelType}</p>
                            <button className='btn btn-primary' onClick={() => { history.push('/login') }}>Open</button><br /><br /><br /><br />
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Home