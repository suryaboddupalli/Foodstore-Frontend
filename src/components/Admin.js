import React, { useEffect, useState } from "react";
import api from '../services'
import Navbar from './Navbar'

function Admin() {
    const [data, setData] = useState([]);
    useEffect(() => {
        api.hotels()
            .then(res => setData(res.data))
    }, [])

    return (
        <div className='home'>
            <Navbar />
            <div>
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
                                <br /><br /><br /><br />
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin