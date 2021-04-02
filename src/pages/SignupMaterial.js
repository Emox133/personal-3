import React, {useState} from 'react'
import {Grid, Paper, Typography, TextField, Button, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import axios from 'axios'
import {setAuthHeader} from './../utils/SetAuthHeader'
import {useAuth} from '../contexts/authContext'

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        minHeight: 'calc(100vh - 64px)'
    },
    paperRoot: {
        minHeight: '50vh',
        position: 'relative'
    },
    typographyRoot: {
        display: 'inline-block',
        marginTop: '.5rem'
    },
    gridMain: {
        marginTop: theme.spacing(1)
    },
    formRoot: {
        textAlign: 'center'
    },
    textFieldRoot: {
        width: '75%',
        marginBottom: '.8rem'
    },
    boxRoot: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '3rem'
    }
}))

const Signup = () => {
    const [fields, setFields] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    console.log(errors)

    const {auth, setAuth} = useAuth()

    const classes = useStyles()

    const handleChange = e => {
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
                setAuthHeader(res.data.token)
                setAuth(true)
                // history.push('/')
            }
        })
        .catch(err => {
            console.log(err.response)
            // alert('Something went wrong. 😰')
            const errObj = err.response.status !== 403 ? err.response.data.error.errors : {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            } 
            setErrors({...errObj})
        })
    }

    return (
       !auth ? <Grid className={classes.gridRoot} container alignContent="center" justify="center">
            <Grid item sm={2} />
            <Grid item className={classes.gridMain} xs={10} sm={8} md={4} >
                <Paper className={classes.paperRoot} elevation={2}>
                    <form className={classes.formRoot} onSubmit={handleSubmit}>
                        <Typography className={classes.typographyRoot} variant="h5" align="center">
                            Registracija
                        </Typography>
                    <Box className={classes.boxRoot} component="div">
                        <TextField 
                            className={classes.textFieldRoot}
                            type="text"
                            // required
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            error
                            id="outlined-error-helper-text"
                            label={errors.firstName ? 'Error' : null}
                            helperText={errors.firstName ? errors.firstName.message : null}
                        />
                        <TextField 
                            className={classes.textFieldRoot}
                            type="text"
                            // required
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            error
                            id="outlined-error-helper-text"
                            label={errors.lastName ? 'Error' : null}
                            helperText={errors.lastName ? errors.lastName.message : null}
                        />
                        <TextField 
                            className={classes.textFieldRoot}
                            type="text"
                            // required
                            placeholder="Username"
                            name="userName"
                            onChange={handleChange}
                            error
                            id="outlined-error-helper-text"
                            label={errors.username ? 'Error' : null}
                            helperText={errors.username ? errors.username.message : null}
                        />
                        <TextField 
                            className={classes.textFieldRoot}
                            type="email"
                            // required
                            placeholder="E-Mail"
                            name="email"
                            onChange={handleChange}
                            error
                            id="outlined-error-helper-text"
                            label={errors.email ? 'Error' : null}
                            helperText={errors.email ? errors.email.message : null}
                        />
                        <TextField 
                            className={classes.textFieldRoot}
                            type="password"
                            // required
                            placeholder="Lozinka"
                            name="password"
                            onChange={handleChange}
                            error
                            id="outlined-error-helper-text"
                            label={errors.password ? 'Error' : null}
                            helperText={errors.password ? errors.password.message : null}
                        />
                        <TextField 
                            className={classes.textFieldRoot}
                            type="password"
                            // required
                            placeholder="Potvrdite Lozinku"
                            name="confirmPassword"
                            onChange={handleChange}
                            error
                            id="outlined-error-helper-text"
                            label={errors.confirmPassword ? 'Error' : null}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : null}
                        />

                        <Button type="submit" style={{position: 'absolute', bottom: '10px'}} variant="contained" color="primary" size="small">
                            Submit
                        </Button>
                    </Box>
                    </form>
                </Paper>
            </Grid>
            <Grid item sm={2} />
        </Grid> : null
    )
}

export default Signup
