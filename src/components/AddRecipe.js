import api from '../services';
import React, { useState, useEffect } from 'react'
import RecipeValidation from '../validation/RecipeValidation';
import Navbar from './Navbar'

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        recipeName: '',
        cost: '',
    })
    const [success, setSuccess] = useState()
    const [data, setData] = useState()
    const [recipeErrors, SetRecipeErrors] = useState()
    const [recipeImg, setRecipeImg] = useState()
    const [error, setError] = useState()
    const changeHandler = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (RecipeValidation(recipe)) {
            SetRecipeErrors(RecipeValidation(recipe))
        } else {
            const recipeData = new FormData();
            recipeData.append('Name', recipe.recipeName)
            recipeData.append('cost', recipe.cost)
            recipeData.append('RecipeImg', recipeImg)

            api.addRecipe(recipeData)
                .then((res) => {
                    setSuccess(res.data)
                }).catch((err) => {
                    setError(err.response.data)
                });
        }
    }
    useEffect(() => {
        api.recipe()
            .then(res => {
                setData(res.data)
            })
    })

    return (
        <div className='home'>
           <Navbar />
           <br /><br /><br />
            <div className='text'>
                <form className='Hotel' enctype='multipart/form-data' onSubmit={handleSubmit}>
                    <h3 id='head' className='text-center'>Recipes Data</h3>
                    <div className='text-center'>
                        {success && <h4 className='text-success'>{success}</h4>}
                        {error && <h4 className='text-danger'>{error}</h4>}
                        {recipeErrors ? <span style={{ color: 'red' }}>{recipeErrors}</span> : null}
                    </div>
                    <label id='labels'>Name</label>
                    <input type=' text' className='txtbox' placeholder='Recipe Name' name='recipeName' onChange={changeHandler} />
                    <label id='labels'>Cost</label>
                    <input type=' text' className='txtbox' placeholder='Recipe Name' name='cost' onChange={changeHandler} />
                    <label>Upload</label>
                    <input type='file' className='txtbox' name='recipeImg' onChange={event => { const file = event.target.files[0]; setRecipeImg(file) }} />
                    <button className='btn btn-primary'>Register</button>
                </form>
            </div>
            <div className='container mt-5' >
                <div className='card'>
                    {data && data.map((recipe) => <div className='row' key={recipe._id}>
                        <div className='col-lg-4'>
                            <img src={`../uploads/${recipe.recipeImg}`} className='img-fluid' alt={recipe.recipeImg} style={{ width: 600, height: 200 }} />
                        </div>
                        <div className='col-lg-8 px-5' >
                            <p>Id : {recipe._id}</p>
                            <h2>{recipe.recipeName} </h2>
                            <h6>Rs.{recipe.cost}</h6>
                            <br /><br /><br /><br /><br /><br />
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default AddRecipe