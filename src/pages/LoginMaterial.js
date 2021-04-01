import React, {useState} from 'react'
import {Grid, Paper, Typography, TextField, Button, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import axios from 'axios'
import {setAuthHeader} from './../utils/SetAuthHeader'
import {useAuth} from './../contexts/authContext'
import {useHistory} from 'react-router-dom'

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
        marginTop: '1rem'
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

const Login = () => {
    const [fields, setFields] = useState({
        password: '',
        email: ''
    })

    const [errors, setErrors] = useState({
        combinedMessage: ''
    })

    const {setAuth} = useAuth()

    const history = useHistory()
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

        axios.post('/users/login', data)
        .then(res => {
            if(res.status === 201) {
                setAuthHeader(res.data.token)
                setAuth(true)
                history.push('/')
            }
        })
        .catch(err => {
            console.log(err.response)
            // alert('Something went wrong. 😰')
            const msg = err.response.data.message
            setErrors({combinedMessage: msg})
        })
    }


    return (
        <Grid className={classes.gridRoot} container alignContent="center" justify="center">
            <Grid item sm={2} />
            <Grid item className={classes.gridMain} xs={10} sm={8} md={4} >
                <Paper className={classes.paperRoot} elevation={2}>
                    <form className={classes.formRoot} onSubmit={handleSubmit}>
                        <Typography className={classes.typographyRoot} variant="h5" align="center">
                            Prijava
                        </Typography>
                    <Box className={classes.boxRoot} component="div">
                        <TextField 
                            className={classes.textFieldRoot}
                            type="email"
                            // required
                            placeholder="E-Mail"
                            name="email"
                            onChange={handleChange}
                            error
                            id="outlined-error-helper-text"
                            label={errors.combinedMessage ? 'Error' : null}
                            helperText={errors.combinedMessage ? errors.combinedMessage : null}
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
                            label={errors.combinedMessage ? 'Error' : null}
                            helperText={errors.combinedMessage ? errors.combinedMessage : null}
                        />

                        <Button type="submit" style={{position: 'absolute', bottom: '10px'}} variant="contained" color="primary" size="small">
                            Submit
                        </Button>
                    </Box>
                    </form>
                </Paper>
            </Grid>
            <Grid item sm={2} />
        </Grid>
    )
}

export default Login
