import React from 'react'
import {useAdveristments} from './../contexts/adveristmentContext'
import {useAuth} from './../contexts/authContext'
import MyAdvertisement from './MyAdvertisement'

import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
   gridRoot: {
       height: 'calc(100vh - 122.4px)',
       marginTop: '1rem'
   },
   typographyRoot: {
       marginTop: '1rem'
   }
}))

const MyAdvertisements = () => {
    const {advertisements} = useAdveristments()
    const {user} = useAuth()
    const classes = useStyles()

    const myAdvertisements = advertisements.filter(el => {
        return el.creator === user._id
    }) 

    const content = advertisements.length > 0 ? myAdvertisements.map(a => {
        return <MyAdvertisement key={a._id} advert={a}/>
    }) : null

    return (
        <>
        <Typography
            className={classes.typographyRoot}
            variant="h3"
            align="center"
        >
            {myAdvertisements.length > 0 ? 'Moji Oglasi' : 'Trenutno nemate objavljenih oglasa'}
        </Typography>
        <Grid container spacing={2} className={classes.gridRoot}>
            {content}
        </Grid>
        </>
    )
}

export default MyAdvertisements
