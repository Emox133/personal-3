import React from 'react';
import {CssBaseline, Typography, Container, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'

import HomeImage from './../images/home-large-3.jpg'

const useStyles = makeStyles(theme => ({
    containerRoot: {
        height: 'calc(100vh - 64px)',
        backgroundColor: '#cfe8fc',
        position: 'relative',
        padding: '0'
    },
    imageRoot: {
        height: '100%',
        width: '100%'
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

  return (
    <>
      <CssBaseline />
      <Container className={classes.containerRoot} maxWidth="xl">
        <img src={HomeImage} className={classes.imageRoot} />
        <div className={classes.boxRoot}>
            <Typography 
                className={classes.typographyRoot}
                variant="h3"
                // align="center"
            >
                Pronađi novi posao među x pronađenih oglasa
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
      </Container>
    </>
  );
}
