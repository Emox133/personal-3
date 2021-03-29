import {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'

// import Home from './pages/Home'
import {useAuth} from './contexts/authContext'
import {useAdveristments} from './contexts/adveristmentContext'
import jwtDecode from 'jwt-decode'
import SingleAdvertMaterial from './pages/SingleAdvertMaterial'

// MATERIAL UI COMPONENTS
import SignupMaterial from './pages/SignupMaterial'
import LoginMaterial from './pages/LoginMaterial'
import NavbarMaterial from './components/layout/NavbarMaterial'
import HomeMaterial from './pages/HomeMaterial'

// INITIAL DESIGN COMPONENTS
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Navbar from './components/layout/Navbar'
// import Home from './pages/Home'
// import SingleAdvertisement from './pages/SingleAdvertisement';

axios.defaults.baseURL = 'https://glacial-lake-62293.herokuapp.com/api/v1'
 
function App() {
  const {auth, handleLogout, setAuth, fetchUser} = useAuth()
  const {getAdveristments, page} = useAdveristments()
  const token = localStorage.token;

  useEffect(() => {
    if(token) {
      const decoded = jwtDecode(token)
  
      if(new Date(decoded.exp * 1000) < new Date()) {
        // !EXPIRED
        handleLogout()
      } else {
        axios.defaults.headers.common['Authorization'] = `${token}`;
        setAuth(true)
        fetchUser()
      }
    }
  }, [token, setAuth, handleLogout, page, fetchUser])

  useEffect(() => {
    getAdveristments()
  }, [])

  let authBar = auth ? (
      <Switch>
        <Route exact path="/" component={HomeMaterial}/>
        <Route path="/:id" component={SingleAdvertMaterial}/>
        <Redirect to="/"/>
      </Switch>
  ) : 
  (
    <Switch>
      <Route exact path="/" component={HomeMaterial}/>
      <Route path="/:id" component={SingleAdvertMaterial}/>
      <Route path="/signup" component={SignupMaterial}/>
      <Route path="/login" component={LoginMaterial}/>
    </Switch>)

  return (
    <Router>
      <NavbarMaterial />
      {authBar}
    </Router>
  )
}

export default App;
