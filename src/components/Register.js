import React, { useState } from 'react';
import api from '../services'
import '../css/Register.css'
import { useHistory } from 'react-router-dom';
import RegisterValidation from '../validation/RegisterValidation';

const Register = () => {
	const history = useHistory()
	const [data, setData] = useState({
		firstname: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
	})
	const [clientError, setClientError] = useState()
	const [error, SetError] = useState()
	const [success, setSuccess] = useState()
	const changeHandler = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}
	const handleSubmit = e => {
		e.preventDefault();
		if ((RegisterValidation(data))) {
			setClientError(RegisterValidation(data))
		} else {
			api.register(data)
				.then((res) => {
					setSuccess(res.data)
					history.push('/login')
				}).catch((error) => {
					SetError(error.response.data)
				})
		}
	}

	return (
		<div className='page'>
			<div className='form-container '>
				<div className='bg-secondary p-3 text-white text-center '>
					<h2>Register </h2>
					<form onSubmit={handleSubmit}>
						{clientError ? <span style={{ color: 'red' }}>{clientError}</span> : null}
						{success ? <span style={{ color: 'black' }}>{success}</span> : null}
						{error ? <span style={{ color: 'red' }}>{error}</span> : null}
						<div className='form-group'>
							<label className='labels'>Firstname</label><br />
							<input type=' text' placeholder='Ex:Surya' name='firstName' onChange={changeHandler} /><br />
						</div>
						<div className='form-group'>
							<label className='labels'>Lastname</label><br />
							<input type='text' placeholder='Ex:Boddupalli' name='lastName' onChange={changeHandler} /><br />
						</div>
						<div className='form-group'>
							<label className='labels'>Email</label> <br />
							<input type='text' placeholder='Example@gmail.com' name='email' onChange={changeHandler} /><br />
						</div>
						<div className='form-group'>
							<label className='labels'>Phone</label><br />
							<input type='text' placeholder='Ex:9029288938' name='phone' onChange={changeHandler} /><br />
						</div>
						<div className='form-group'>
							<label id='labels'>Password</label><br />
							<input type='password' placeholder='Min "8" characters' name='password' onChange={changeHandler} /><br />
						</div><br />
						<div>
							<button className='btn btn-primary'>Register</button>
						</div><br />
						<a href='./Login' className='text-white' >Login</a>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register