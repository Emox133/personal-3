import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Modal from '../Modal'
import {useAuth} from '../../contexts/authContext'
import {useAdveristments} from '../../contexts/adveristmentContext'
import {useHistory} from 'react-router-dom'

function Navbar() {
    const {auth, handleLogout} = useAuth()
    const [open, setOpen] = useState(false)
    const history = useHistory()
    const {advertisements, loading} = useAdveristments()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = (e) => {
        e.preventDefault()
        setOpen(false)
    }

    let authBar = !auth && advertisements ? 
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
    auth ?
    (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/" className="nav__link">
                    Home
                </Link>
            </li>
            <li className="nav__item">
                <Link to="" className="nav__link" onClick={handleOpen}> 
                    Objavi Oglas
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/" className="nav__link" onClick={() => handleLogout(history)}>
                    Odjava
                </Link>
            </li>
        </ul>
    </nav>
    ) : null

    return (
        <>
        {authBar}
        <Modal isOpen={open} close={handleClose}/>
        </>
    )
}

export default Navbar
