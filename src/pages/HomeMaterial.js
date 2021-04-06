import React, {useState} from 'react';
import {CssBaseline, Typography, Container, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
import Hero from './../images/home-large-3.jpg'
import {MemoizedSlider} from './../components/layout/Slider'

import {useAdveristments} from './../contexts/adveristmentContext'
import Loader from '../utils/Loader';
import AdvertisementsMaterial from './AdvertisementsMaterial';
import CoockieFooter from '../components/layout/CoockieFooter';

const useStyles = makeStyles(theme => ({
    containerRoot: {
        height: 'calc(100vh - 64px)',
        backgroundColor: '#eee',
        position: 'relative',
        padding: '0',
        overflowX: 'hidden'
    },
    imageRoot: {
        backgroundImage: `linear-gradient(to right, rgba(94,24,232, .3), rgba(94,24,232, .3)), url(${Hero})`,
        // backgroundImage: `linear-gradient(105deg, rgba(94, 24, 232,.5) 0%, rgba(94, 24, 232,.5) 50%, transparent 50%), url(${Hero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 64px)',
        width: '100vw',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)'
    },
    homeX: {
        color: '#5E18E8',
        transition: 'transform .3s ease-in-out',
        '&:hover': {
            display: 'inline-block',
            transform: 'scale(1.5) rotate(360deg)'
        }
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
        return el.name.toLowerCase().includes(fields.query.toLowerCase().trim())
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
    {!loading && advertisements ? 
        <Container className={classes.containerRoot} maxWidth="xl">
            <div className={classes.imageRoot}></div>
            <div className={classes.boxRoot}>
                <Typography 
                    className={classes.typographyRoot}
                    variant="h3"
                    // align="center"
                >
                    Pronađi novi posao među <span className={classes.homeX}>{advertisements.length > 0 ? advertisements.length : 'X'}</span> ponuđenih oglasa
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
                <MemoizedSlider />
                <CoockieFooter />
            <AdvertisementsMaterial filterAd={filteredAdvertisements}/>
      </Container> : <Loader />}
      </>
  );
}
