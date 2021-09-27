import React from 'react'
import api from '../services'
import { useEffect, useState } from 'react'

function Recipe() {
    const [data, setData] = useState([]);
    const addcart = (recipe) => {
        localStorage.setItem("recipeName", recipe.Name)
        localStorage.setItem("cost", recipe.cost)
        localStorage.setItem("recipeImage", recipe.RecipeImg)
    }
    useEffect(() => {
        api.recipe()
            .then(res => setData(res.data))
    })

    return (
        <div className='home'>
            <nav className='navbar bg-black fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'><span style={{ color: 'red' }}>F</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'Orange' }}>O</span><span style={{ color: 'yellow' }}>D</span><span style={{ color: 'green' }}>S</span><span style={{ color: 'blue' }}>T</span><span style={{ color: 'orange' }}>O</span><span style={{ color: 'violet' }}>R</span><span style={{ color: 'white' }}>E</span></a>
                    </div>
                    <ul className='nav'>
                        <li ><a className='nav-link text-light' href='/dashboard'>Dashboard</a></li>
                        <li ><a className='nav-link text-light' href='/Cart'>Cart</a></li>
                        <li ><a className='nav-link text-light' href='/login' onClick={() => sessionStorage.clear()}>Signout</a></li>
                    </ul>
                </div>
            </nav><br /><br />
            <div className='container mt-5' >
                <div className='card'>
                    {data && data.map((recipe) => <div className='row' key={recipe._id}>
                        <div className='col-lg-4'>
                            <img src={`../uploads/${recipe.recipeImg}`} className='img-fluid' alt={recipe.recipeImg} style={{ width: 600, height: 200 }} />
                        </div>
                        <div className='col-lg-8 px-5' >
                            <h2>{recipe.recipeName} </h2>
                            <h6>Rs.{recipe.cost}</h6>
                            <button className='btn btn-primary' onClick={() => addcart(recipe)}>Add To Cart</button><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Recipe