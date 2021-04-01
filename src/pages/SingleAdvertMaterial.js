import React from 'react'
import {useAdveristments} from './../contexts/adveristmentContext'
import SingleAdvertContentMaterial from './SingleAdvertContentMaterial'
import Loader from '../utils/Loader'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    gridContainerRoot: {
        height: 'calc(100vh - 64px)'
    },
    gridItemDisabled: {
        margin: '0 auto',
        height: '100%',
        background: 'yellow',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    gridItemOne: {
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
        background: 'red'
    },
    gridItemTwo: {
        position: 'relative',
        [theme.breakpoints.up('xs')]: {
            margin: '0 auto 1rem auto'
        },
        [theme.breakpoints.up('sm')]: {
            margin: '0 auto'
        }
    },
    gridItemThree: {
        height: '100%',
        background: 'blue',
        margin: '0 auto'
    },
    paperRoot: {
        height: '100%',
        background: '#eee'
    }
}))

const SingleAdvertMaterial = () => {
   const classes = useStyles()
   const {advertisement} = useAdveristments()

   const content = advertisement ? <SingleAdvertContentMaterial advertSingle={advertisement}/> : <Loader />

    return (
        <Grid container className={classes.gridContainerRoot}>
            <Grid item xs={false} sm={3} md={3} className={classes.gridItemOne}>
                <Box style={{background: 'red', height: '33.3%', width: '100%'}}></Box>
                <Box style={{background: 'blue', height: '33.3%', width: '100%'}}></Box>
                <Box style={{background: 'green', height: '33.3%', width: '100%'}}></Box>
            </Grid>
            <Grid item xs={8} sm={6} className={classes.gridItemTwo}>
                <Paper 
                    elevation={3}
                    className={classes.paperRoot}
                >
                    {content}
                </Paper>
            </Grid>
            <Grid item xs={8} className={classes.gridItemDisabled}>
                <Box style={{background: 'red', height: '33.3%', width: '100%'}}></Box>
                <Box style={{background: 'blue', height: '33.3%', width: '100%'}}></Box>
                <Box style={{background: 'green', height: '33.3%', width: '100%'}}></Box>
            </Grid>
            <Grid item xs={8} sm={3} md={3} className={classes.gridItemThree}>
                <Box style={{background: 'royalBlue', height: '33.3%', width: '100%'}}></Box>
                <Box style={{background: 'coral', height: '33.3%', width: '100%'}}></Box>
                <Box style={{background: 'crimson', height: '33.3%', width: '100%'}}></Box>
            </Grid>
        </Grid> 
    )
}

export default SingleAdvertMaterial
