import React, {useState} from 'react';
import {CssBaseline, Typography, Container, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'

import HomeImage from './../images/home-large-3.jpg'
import LoaderMaterial from './../utils/LoaderMaterial'
import {useAdveristments} from './../contexts/adveristmentContext'
import Loader from '../utils/Loader';
import Advertisements from './Advertisements';
import AdvertisementsMaterial from './AdvertisementsMaterial';

const useStyles = makeStyles(theme => ({
    containerRoot: {
        height: 'calc(100vh - 64px)',
        backgroundColor: '#eee',
        position: 'relative',
        padding: '0'
    },
    imageRoot: {
        height: '100%',
        width: '100%',
        backgroundImage: 'linear-gradient(to right, crimson, orangered)'
    },
    boxRoot: {
        width: '100%',
        position: 'absolute',
        top: '30vh',
        color: '#eee',
        textAlign: 'center',
    },
    typographyRoot: {
        fontWeight: '300',
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.8rem'
        }
    },
    textFieldRoot: {
        // height: 'auto',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        color: '#fff',
        [theme.breakpoints.up('xs')]: {
            width: 'auto',
            marginTop: '1rem'
        },
        [theme.breakpoints.up('sm')]: {
            width: '25%',
        }
    }
}))

export default function HomeMaterial() {
    const [fields, setFields] = useState({query: ''})
    const classes = useStyles()
    const {loading, advertisements} = useAdveristments()

    const filteredAdvertisements = advertisements.length > 0 ? advertisements.filter(el => {
        return el.name.includes(fields.query)
    }) : []

    const handleChange = e => {
        setTimeout(() => {
            setFields({
                ...fields,
                [e.target.name]: e.target.value
            })
        }, 2000)
    }
    
  return (
    <>
    <CssBaseline />
    {!loading ? 
        <Container className={classes.containerRoot} maxWidth="xl">
            <div className="imageRoot"></div>
            <div className={classes.boxRoot}>
                <Typography 
                    className={classes.typographyRoot}
                    variant="h3"
                    // align="center"
                >
                    Pronađi novi posao među <span className="home__x">{advertisements.length > 0 ? advertisements.length : 'X'}</span> pronađenih oglasa
                </Typography>
                <TextField 
                    // placeholder="Unesite ključnu riječ..."
                    type="text"
                    variant="outlined"
                    className={classes.textFieldRoot}
                    label="Unesite ključnu riječ..."
                    name="query"
                    onChange={handleChange}
                />
            </div>
            <AdvertisementsMaterial filterAd={filteredAdvertisements}/>
      </Container> : <Loader />}
      </>
  );
}
