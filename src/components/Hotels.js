import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function Hotels() {
    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/hotel')
            .then(res => setData(res.data))
    })

    return (
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
                        <button className='btn btn-primary' onClick={() => { history.push('/hotel/recipe') }}>Open</button><br /><br /><br /><br />
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Hotels