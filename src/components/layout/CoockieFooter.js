import React, {useState, useEffect} from 'react'
import {useAuth} from './../../contexts/authContext'
import axios from 'axios'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    buttonRoot: {},
    cancelButton: {
        [theme.breakpoints.up('xs')]: {
            marginTop: '.5rem',
            marginLeft: 0
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: 0,
            marginLeft: '.5rem'
        }
    }
}))

const CoockieFooter = () => {
    const [open, setOpen] = useState(false)
    const {user} = useAuth()

    const classes = useStyles()

    const handleClose = () => {
        setOpen(false)
    }

    const handleClick = () => {
        axios.get('/users/cookies').then(res => {
            if(res.status === 200) {
                setOpen(false)
            }
        }).catch(err => {
            // alert('Something went wrong. 😰')
            console.log(err.response)
        })
    }

    useEffect(() => {
       let timeout = setTimeout(() => {
            setOpen(true)
        }, 2000)

       return () => {
           clearTimeout(timeout)
       }
    }, [])
    
    return (
       open && !user.cookiesAccepted ? <div className="coockie__footer">
            <div className="coockie__text-box">
                <h2>Kolačići</h2>
                <p>Pohranite neophodne kolačiće kako bi vaše korisničko iskustvo bilo što bolje.</p>
            </div>

            <div className="coockie__confim-box">
                <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>
                <Button className={classes.cancelButton} variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
            </div>
        </div> : null
    )
}

export default CoockieFooter
