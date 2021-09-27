import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Login.css'
import api from '../services'
import LoginValidation from '../validation/LoginValidation';

const Login = () => {
    const history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [clientErrors, setClientErrors] = useState();
    const [error, setError] = useState(null)
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (LoginValidation(data)) {
            setClientErrors(LoginValidation(data))
        } else {
            api.login(data)
                .then(res => {
                    if (res.data.Token) {
                        sessionStorage.setItem('token', res.data.Token)
                        if (res.data.Admin === true) {
                            sessionStorage.setItem('admin', res.data.Admin)
                            history.push('/admin')
                        } else {
                            history.push('/dashboard')
                        }
                    }
                })
                .catch((err) => {
                    setError(err.response.data.error)
                })
        }
    }

    return (
        <div className='form-container mt-5 '>
            <div className='bg-secondary p-3 text-white text-center '>
                <h2>Login</h2>
                {error && <div className='error text-danger'>{error}</div>}
                {clientErrors ? <span style={{ color: 'red' }}>{clientErrors}</span> : null}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Email</label> <br />
                        <input type='text' placeholder='Example@gmail.com' name='email' onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label id='labels'>Password</label><br />
                        <input type='password' placeholder='ABCabc!@#$%^123' name='password' onChange={changeHandler} />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>login</button>
                    </div><br />
                    <a href='./Register' className='text-white' >Register</a>
                </form>
            </div>
        </div>
    )
}

export default Login