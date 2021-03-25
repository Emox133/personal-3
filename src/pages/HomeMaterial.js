import React from 'react';
import {CssBaseline, Typography, Container, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'

import HomeImage from './../images/home-large-3.jpg'
import LoaderMaterial from './../utils/LoaderMaterial'
import {useAdveristments} from './../contexts/adveristmentContext'
import Loader from '../utils/Loader';
import Advertisements from './Advertisements';

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
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.8rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem'
        },
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
    const classes = useStyles()
    const {loading, advertisements} = useAdveristments()

  return (
    <>
    <CssBaseline />
    {!loading ? <Container className={classes.containerRoot} maxWidth="xl">
        <div className="imageRoot"></div>
        <div className={classes.boxRoot}>
            <Typography 
                className={classes.typographyRoot}
                variant="h3"
                // align="center"
            >
                Pronađi novi posao među <span className="home__x">X</span> pronađenih oglasa
            </Typography>
            <TextField 
                // placeholder="Unesite ključnu riječ..."
                type="text"
                variant="outlined"
                className={classes.textFieldRoot}
                label="Unesite ključnu riječ..."
                name="query"
            />
        </div>
      </Container> : <Loader />}
    </>
  );
}
