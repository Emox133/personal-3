import React from 'react'
import {useAdveristments} from './../contexts/adveristmentContext'
import AdvertisementMaterial from './AdvertisementMaterial'

import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
   gridRoot: {
       height: '100%',
       marginTop: '1rem'
   },
   typographyRoot: {
       marginTop: '1rem'
   }
}))

const AdvertisementsMaterial = ({filterAd}) => {
    // const {advertisements} = useAdveristments()
    const classes = useStyles()

    const content = filterAd ? filterAd.map(a => {
        return <AdvertisementMaterial key={a._id} advert={a}/>
    }) : null

    return (
        <>
        <Typography
            className={classes.typographyRoot}
            variant="h3"
            align="center"
        >
            Izdvojeni Oglasi
        </Typography>
        <Grid container spacing={2} className={classes.gridRoot}>
            {content}
        </Grid>
        </>
    )
}

export default AdvertisementsMaterial
