/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

const login = (data) =>
    axiosInstance({
        method: 'POST',
        url: '/user/login',
        data: data
    })
const register = (data) =>
    axiosInstance({
        method: 'POST',
        url: '/user/register',
        data: data
    })
const addHotel = (hoteldata) =>
    axiosInstance({
        method: 'POST',
        url: '/hotel/add',
        data: hoteldata
    })
const hotels = (hoteldata) =>
    axiosInstance({
        method: 'GET',
        url: '/hotel',
        data: hoteldata
    })
const addRecipe = (recipedata) =>
    axiosInstance({
        method: 'POST',
        url: '/recipe/add',
        data: recipedata
    })
const recipe = (recipedata) =>
    axiosInstance({
        method: 'GET',
        url: '/recipe',
        data: recipedata
    })
const users = (userdetails) =>
    axiosInstance({
        method: 'GET',
        url: '/user/userdetails',
        data: userdetails
    })

export default {
    login,
    register,
    addHotel,
    hotels,
    addRecipe,
    recipe,
    users
}
