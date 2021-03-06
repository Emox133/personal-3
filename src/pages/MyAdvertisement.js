import React from 'react'
import {useHistory} from 'react-router-dom'
import {useAdveristments} from './../contexts/adveristmentContext'

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

const useStyles = makeStyles(theme => ({
    cardRoot: {
        margin: '0 auto',
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

const MyAdvertisement = ({advert}) => {
    const matches = useMediaQuery('(max-width:600px)');
    const classes = useStyles()
    const history = useHistory()
    const {getAdvertisement} = useAdveristments()
    const {logo, _id} = advert

    const handleClick = (id) => {
        getAdvertisement(id, history)
    }
    
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.cardRoot} style={{width: matches ? '70%' : '80%'}}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={logo}
                    title="Company Logo"
                />
                <CardContent>
                    <Box className={classes.boxRoot}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {advert.name}
                        </Typography>
                    </Box>
                <Typography variant="body2" color="textSecondary" component="p">
                    {advert.companyName}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" size="small" color="primary" className={classes.buttonRoot} onClick={() => handleClick(_id)}>
                    Konkuriši
                </Button>
            </CardActions>
        </Card>
        </Grid>
    )
}

export default MyAdvertisement
