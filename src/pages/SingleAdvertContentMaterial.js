import React, {useEffect} from 'react'
import SingleAdvertDetailsMaterial from './SingleAdvertDetailsMaterial'
import {useAdveristments} from './../contexts/adveristmentContext'
import {useLocation} from 'react-router-dom'

import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    imgRoot: {
        display: 'block',
        margin: '0 auto',
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            height: '200px',
        },
        [theme.breakpoints.up('sm')]: {
    
        },
        [theme.breakpoints.up('md')]: {
         width: '74%'
        },
        [theme.breakpoints.up('lg')]: {

        }
    }
}))

const SingleAdvertContentMaterial = ({advertSingle}) => {
    const classes = useStyles()
    const {logo} = advertSingle
    const {getAdvertisement} = useAdveristments()
    const location = useLocation()
    const id = location.pathname.split`/`[2]

    useEffect(() => {
        getAdvertisement(id)
    }, [id, getAdvertisement])

    return (
        <>
          <Box>
              <img src={logo} alt="Company Logo" className={classes.imgRoot}/>
              <SingleAdvertDetailsMaterial advertSingle={advertSingle} />
          </Box>
        </>
    )
}

export default SingleAdvertContentMaterial
