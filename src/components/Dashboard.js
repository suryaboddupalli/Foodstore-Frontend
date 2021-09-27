import React from 'react'
import Hotels from './Hotels'

function Dashboard() {
    const logout = () => {
        sessionStorage.clear();
    }
    return (
        <div className='home'>
            <nav className='navbar bg-black fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'><span style={{ color: 'red' }}>F</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'yellow' }}>D</span><span style={{ color: 'green' }}>S</span><span style={{ color: 'blue' }}>T</span><span style={{ color: 'orange' }}>O</span><span style={{ color: 'violet' }}>R</span><span style={{ color: 'white' }}>E</span></a>
                    </div>
                    <ul className='nav nav-pills'>
                        <li ><a className='nav-link active text-light' href='/dashboard'>Dashboard</a></li>
                        <li ><a className='nav-link text-light' href='/Cart'>Cart</a></li>
                        <li ><a className='nav-link text-light' href='/login' onClick={logout}>SignOut</a></li>
                    </ul>
                </div>
            </nav><br /><br />
            <Hotels />
        </div>
    )
}

export default Dashboard