import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Home from '../components/Home'
import Hotels from '../components/Hotels';
import AddHotels from '../components/AddHotels'
import AddRecipe from '../components/AddRecipe';
import Recipe from '../components/Recipe';
import Admin from '../components/Admin';
import Dashboard from '../components/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Cart from '../components/Cart'

const index = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <PublicRoute path='/cart' exact component={Cart} />
                <PublicRoute path='/hotel/recipe' exact component={Recipe} />
                <PublicRoute path='/dashboard' exact component={Dashboard} />
                <PrivateRoute path='/profile' component={Profile} />
                <PrivateRoute path='/hotel' exact component={Hotels} />
                <Route path='/hotel/add' exact component={AddHotels} />
                <PrivateRoute path='/recipe/add' exact component={AddRecipe} />
                <PrivateRoute path='/admin' exact component={Admin} />
            </Switch>
        </Router>
    )
}

export default index