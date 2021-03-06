import React from 'react'
import api from '../services'
import { useEffect, useState } from 'react'
import HotelValidation from '../validation/HotelValidation'
import Navbar from './Navbar'

function AddHotel() {
    const [hotel, setHotel] = useState({
        hotelName: '',
        locality: '',
        hotelType: '',
    })
    const [success, setSuccess] = useState();
    const [data, setData] = useState([]);
    const [hotelErrors, setHotelErrors] = useState();
    const [hotelImg, setHotelImg] = useState();
    const [error, setError] = useState();
    const changeHandler = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (HotelValidation(hotel)) {
            setHotelErrors(HotelValidation(hotel))
        } else {
            const hotelData = new FormData();
            hotelData.append('hotelName', hotel.hotelName)
            hotelData.append('locality', hotel.locality)
            hotelData.append('hotelType', hotel.hotelType)
            hotelData.append('hotelImg', hotelImg)

            api.addHotel(hotelData)
                .then((res) => {
                    setSuccess(res.data)
                }).catch((err) => {
                    setError(err.response.data)
                });
        }
    }
    useEffect(() => {
        api.hotels()
            .then(res => setData(res.data))
    }, [])

    return (
        <div className='home'>
          <Navbar /><br /><br /><br />
            <div className='text'>
                <form className='Hotel' encType='multipart/form-data' onSubmit={handleSubmit}>
                    <h3 id='head' className="text-center">Hotels Data</h3>
                    <div className="text-center">
                        {success && <h4 className="text-success">{success}</h4>}
                        {error && <h4 className="text-danger">{error}</h4>}
                        {hotelErrors ? <span style={{ color: 'red' }}>{hotelErrors}</span> : null}
                    </div>
                    <label id='labels'>Name</label>
                    <input type=' text' className='txtbox' placeholder='Hotel Name' name='hotelName' onChange={changeHandler} />
                    <label id='labels'>Locality</label>
                    <input type='text' className='txtbox' placeholder='address' name='locality' onChange={changeHandler} />
                    <label id='labels'>HotelType</label>
                    <input type='text' className='txtbox' placeholder='Food Type' name='hotelType' onChange={changeHandler} />
                    <label>Hotel Image</label>
                    <input type='file' className='txtbox' name='hotelImg' onChange={event => { setHotelImg(event.target.files[0]) }} />
                    <button className='btn btn-primary'>Register</button>
                </form>
            </div>
            <div className='container mt-5' >
                <div className='card'>
                    {data.map((hotel) => <div className='row' key={hotel._id}>
                        <div className='col-lg-4' >
                            <img src={`../uploads/${hotel.hotelImg}`} className='img-fluid' alt={hotel.hotelImg} style={{ width: 600, height: 180 }} />
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
    )
}

export default AddHotel