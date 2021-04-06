import React from 'react'
import {useHistory} from 'react-router-dom'
import {useAdveristments} from './../contexts/adveristmentContext'
import {useAuth} from './../contexts/authContext'

import DeleteAdvertisement from './../components/advertisements/DeleteAdvertisement'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core'
import {useElementOnScreen} from './../hooks/useElementOnScreen'

const useStyles = makeStyles(theme => ({
    cardRoot: {
        margin: '0 auto'
    },
    media: {
        height: 200,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    buttonRoot: {
        margin: '0 auto'
    },
    boxRoot: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
}))

const AdvertisementMaterial = ({advert}) => {
    const matches = useMediaQuery('(max-width:600px)');
    const classes = useStyles()
    const [containerRef, isVisible] = useElementOnScreen()
    const history = useHistory()
    const {getAdvertisement} = useAdveristments()
    const {user, auth} = useAuth()
    const {logo, _id, creator, companyName, name} = advert

    const handleClick = (id) => {
        getAdvertisement(id, history)
    }

    const isOwnAdvert = () => {
        return creator === user._id
    }

    return (
        <Grid ref={containerRef} item xs={12} sm={6} md={4} lg={3}>
            <Card data-visited={isVisible} className={classes.cardRoot} style={{width: matches ? '70%' : '80%'}}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={logo}
                        title="Company Logo"
                    />
                    <CardContent>
                        <Box className={classes.boxRoot}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            {isOwnAdvert() && auth ? <DeleteAdvertisement _id={_id}/> : null}
                        </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {companyName}
                    </Typography>
                    </CardContent> 
                </CardActionArea>
                <CardActions>
                    <Button variant="outlined" size="small" color="primary" className={classes.buttonRoot} onClick={() => handleClick(advert._id)}>
                        Konkuriši
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default AdvertisementMaterial
