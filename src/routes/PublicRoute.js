import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PublicRoute({ component: Component, ...rest }) {
    const token = (sessionStorage.getItem('token'))
    return <Route {...rest} render={(props) => {
        if (token) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }} />
}
export default PublicRoute