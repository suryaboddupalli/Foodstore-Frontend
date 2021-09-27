import index from './routes/index'
import {Route} from 'react-router-dom'

const App = ()=>{
    return(
      <Route path='/' component={index} />
    )
}
export default App  