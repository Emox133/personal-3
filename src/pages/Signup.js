import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useAuth} from '../contexts/authContext'

function Signup() {
    const [fields, setFields] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {setAuth} = useAuth()

    const history = useHistory()

    const handleFieldsChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            ...fields
        }

        axios.post('/users/signup', data)
        .then(res => {
            if(res.status === 201) {
                setAuth(true)
                history.push('/')
            }
        })
        .catch(err => console.log(err.response))
    }

    return (
        <div className="welcome-container">
            <h2 className="welcome__title signup--title">Registracija</h2>
            <form className="form signup__form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Ime" name="firstName" onChange={handleFieldsChange}/>
                <input type="text" placeholder="Prezime" name="lastName" onChange={handleFieldsChange}/>
                <input type="email" placeholder="E-mail" name="email" onChange={handleFieldsChange}/>
                <input type="text" placeholder="Korisničko Ime" name="username" onChange={handleFieldsChange}/>
                <input type="password" placeholder="Lozinka" name="password" onChange={handleFieldsChange}/>
                <input type="password" placeholder="Ponovite Lozinku" name="confirmPassword" onChange={handleFieldsChange}/>

                <button className="signup__btn btn" type="submit">Potvrdi</button>
            </form>
        </div>
    )
}

export default Signup
