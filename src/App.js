import {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {useAuth} from './contexts/authContext'
import {useAdveristments} from './contexts/adveristmentContext'
import jwtDecode from 'jwt-decode'

axios.defaults.baseURL = 'https://glacial-lake-62293.herokuapp.com/api/v1'
 
function App() {
  const {auth, handleLogout, setAuth} = useAuth()
  const {getAdveristments} = useAdveristments()
  const token = localStorage.token;

  useEffect(() => {
    getAdveristments()
  }, [])

  useEffect(() => {
    if(token) {
      const decoded = jwtDecode(token)
  
      if(new Date(decoded.exp * 1000) < new Date()) {
        // !EXPIRED
        handleLogout()
      } else {
        axios.defaults.headers.common['Authorization'] = `${token}`;
        setAuth(true)
      }
    }
  }, [token, setAuth, handleLogout])

  let authBar = auth ? (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Redirect to="/"/>
      </Switch>
  ) : 
  (
    <Switch>
      <Route path="/signup" component={Signup}/>
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
