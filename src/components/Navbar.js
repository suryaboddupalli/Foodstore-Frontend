import React from 'react'

function Navbar() {

    return (
        <nav className='navbar bg-black fixed-top'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <a href='/' className='navbar-brand text-light'><span style={{ color: 'red' }}>F</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'yellow' }}>D</span><span style={{ color: 'green' }}>S</span><span style={{ color: 'blue' }}>T</span><span style={{ color: 'orange' }}>O</span><span style={{ color: 'violet' }}>R</span><span style={{ color: 'white' }}>E</span></a>
                </div>
                <ul className='nav'>
                    <li ><a className='nav-link text-light' href='/admin'>Home</a></li>
                    <li ><a className='nav-link text-light' href='/hotel/add'>Add Hotels</a></li>
                    <li ><a className='nav-link text-light' href='/recipe/add'>Add Recipe</a></li>
                    <li ><a className='nav-link text-light' href='/profile'>Users</a></li>
                    <li ><a className='nav-link text-light' href='/login' onClick={() =>  sessionStorage.clear()}>Signout</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar