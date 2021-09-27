import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    const token = (sessionStorage.getItem('token'))
    const admin = (sessionStorage.getItem('admin'))
    return <Route {...rest} render={(props) => {
        if (token && admin) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }} />
}
export default PrivateRoute