import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/authContext'
import axios from 'axios'

function Signup() {
    const [fields, setFields] = useState({
      email: '',
      password: ''
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

        axios.post('/users/login', data)
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
            <h2 className="welcome__title signup--title">Prijava</h2>
            <form className="form signup__form" onSubmit={handleSubmit}>
                <input type="email" placeholder="E-mail" name="email" onChange={handleFieldsChange}/>
                <input type="password" placeholder="Lozinka" name="password" onChange={handleFieldsChange}/>

                <button className="signup__btn btn" type="submit">Potvrdi</button>
            </form>
        </div>
    )
}

export default Signup
