import React from 'react'

const Cart = () => {
    const recipeName = localStorage.getItem('recipeName')
    const cost = localStorage.getItem('cost')
    const recipeImage = localStorage.getItem('recipeImage')

    return (
        <div className='home'>
            <nav className='navbar bg-black fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'><span style={{ color: 'red' }}>F</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'yellow' }}>D</span><span style={{ color: 'green' }}>S</span><span style={{ color: 'blue' }}>T</span><span style={{ color: 'orange' }}>O</span><span style={{ color: 'violet' }}>R</span><span style={{ color: 'white' }}>E</span></a>
                    </div>
                    <ul className='nav nav-pills'>
                        <li ><a className='nav-link  text-light' href='/dashboard'>Dashboard</a></li>
                        <li ><a className='nav-link active text-light' href='/cart'>Cart</a></li>
                        <li ><a className='nav-link text-light' href='/login' onClick={() => sessionStorage.clear()}>SignOut</a></li>
                    </ul>
                </div>
            </nav><br /><br />
            <div className='container mt-5' >
                <div className='card'>
                    <div className='col-lg-4'>
                        <img src={`../uploads/${recipeImage}`} className='img-fluid' alt={recipeImage} style={{ width: 600, height: 200 }} />
                    </div>
                    <div className='col-lg-8 px-5' >
                        <h2>{recipeName} </h2>
                        <h6>Rs.{cost}</h6>
                        <button className='btn btn-primary' onClick={() => localStorage.clear()}>Remove</button>
                        <br /><br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart