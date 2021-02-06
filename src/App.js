import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {useAuth} from './contexts/authContext'

axios.defaults.baseURL = 'https://glacial-lake-62293.herokuapp.com/api/v1'
 
function App() {
  const {auth} = useAuth()

  let authBar = auth ? (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Redirect to="/"/>
      </Switch>
  ) : 
  (
    <Switch>
      <Route exact path="/" component={Signup}/>
      <Route path="/login" component={Login}/>
    </Switch>)

  return (
    <Router>
      <Navbar />
      {authBar}
    </Router>
  )
}

export default App;
