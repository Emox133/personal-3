import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/authContext'
import axios from 'axios'
import {setAuthHeader} from '../utils/SetAuthHeader'

function Signup() {
    const [fields, setFields] = useState({
      email: '',
      password: ''
    })

    const [errors, setErrors] = useState({
        combinedMessage: ''
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
                setAuthHeader(res.data.token)
                setAuth(true)
                history.push('/')
            }
        })
        .catch(err => {
            const msg = err.response.data.message
            setErrors({combinedMessage: msg})
        })
    }

    return (
        <div className="welcome-container">
            <h2 className="welcome__title signup--title">Prijava</h2>
            <form className="form signup__form" onSubmit={handleSubmit}>
                {errors.combinedMessage ? <span>{errors.combinedMessage}</span> : null}
                <input className={errors.combinedMessage ? 'error' : null} type="email" placeholder="E-mail" name="email" onChange={handleFieldsChange}/>
                {errors.combinedMessage ? <span>{errors.combinedMessage}</span> : null}
                <input className={errors.combinedMessage ? 'error' : null} type="password" placeholder="Lozinka" name="password" onChange={handleFieldsChange}/>

                <button className="signup__btn btn" type="submit">Potvrdi</button>
            </form>
        </div>
    )
}

export default Signup
