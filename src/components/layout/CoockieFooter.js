import React, {useState, useEffect} from 'react'
import {useAuth} from './../../contexts/authContext'
import axios from 'axios'

const CoockieFooter = () => {
    const [open, setOpen] = useState(false)
    const {user} = useAuth()

    const handleClose = () => {
        setOpen(false)
    }

    const handleClick = () => {
        axios.get('/users/cookies').then(res => {
            setOpen(false)
        }).catch(err => {
            // alert('Something went wrong. 😰')
            console.log(err.response)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 2000)
    }, [])
    
    return (
       open && !user.cookiesAccepted ? <div className="coockie__footer">
            <div className="coockie__text-box">
                <h2>Kolačići</h2>
                <p>Pohranite neophodne kolačiće kako bi vaše korisničko iskustvo bilo što bolje.</p>
            </div>

            <div className="coockie__confim-box">
                <button className="btn-2 btn--coockie" onClick={handleClick}>Submit</button>
                <button className="btn-2 btn--coockie" onClick={handleClose} style={{backgroundColor: '#222', marginLeft: '.5rem'}}>Cancel</button>
            </div>
        </div> : null
    )
}

export default CoockieFooter
