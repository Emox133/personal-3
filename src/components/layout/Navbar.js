import React from 'react'
import {Link} from "react-router-dom"
import {useAuth} from '../../contexts/authContext'
import {useHistory} from 'react-router-dom'

function Navbar() {
    const {auth, setAuth} = useAuth()
    const history = useHistory()

    const handleLogout = () => {
        setAuth(false)
        history.push('/login')
    }

    let authBar = !auth ? 
    (<nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/" className="nav__link">
                    Registracija
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/login" className="nav__link"> 
                    Prijava
                </Link>
            </li>
        </ul>
    </nav>) :
    (
        <nav className="nav">
            <div className="nav__box">  
                <button className="btn btn--logout" onClick={handleLogout}>
                    Odjava
                </button>
            </div>
        </nav>
    )

    return authBar
}

export default Navbar
