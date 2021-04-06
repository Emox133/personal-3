import React, {useRef} from 'react'
import {useAdveristments} from './../contexts/adveristmentContext'
import AdvertisementMaterial from './AdvertisementMaterial'

import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
   gridRoot: {
    // height: 'calc(100vh - 64px)',
       height: 'auto',
       marginTop: '1rem',
       position: 'relative'
   },
   typographyRoot: {
       marginTop: '1rem'
   },
   buttonRoot: {
       position: 'absolute',
       bottom: '-25px',
       left: '50%',
       transform: 'translate(-50%, 0)'
   }
}))

const AdvertisementsMaterial = ({filterAd}) => {
    const {advertisements, visible, handlePageIncrease, hasMore} = useAdveristments()
    const refEl = useRef(null)
    const classes = useStyles()

    const scrollToBottom = () => {
        setTimeout(() => {
            refEl.current.scrollIntoView({behavior: 'smooth'})
        }, 300)
    }

    let content = filterAd && filterAd.slice(0, visible).map((a, i) => {
        if(advertisements.length === i + 1) {
            hasMore.current = false
        }
        return <AdvertisementMaterial key={a._id} advert={a}/>
    }) 

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
            {hasMore.current && filterAd && filterAd.length > 4 && <Button className={classes.buttonRoot} variant="contained" color="primary" onClick={() => handlePageIncrease(scrollToBottom)}>Učitaj više</Button>}
            <div ref={refEl}>&nbsp;</div>
        </Grid>
        </>
    )
}

export default AdvertisementsMaterial
