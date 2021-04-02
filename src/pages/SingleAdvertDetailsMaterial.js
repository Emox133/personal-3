import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleIcon from '@material-ui/icons/People';
import {Typography, Box} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  listRoot: {
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('xs')]: {
        width: '100%'
    },
    [theme.breakpoints.up('md')]: {
        width: '74%'
    }
  },
  boxRoot: {
      padding: '0 1.2rem'
  },
  typoTitleRoot: {
    margin: '.2rem 0',
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.6rem'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem'
    }
  },
  typoDescRoot: {
    color: '#666',
    [theme.breakpoints.up('xs')]: {
        fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '.9rem'
    }
  }
}));

export default function SingleAdvertDetailsMaterial({advertSingle}) {
  const classes = useStyles();
  const {companyEmail, companyNumber, expiresIn, positionsLeft, description} = advertSingle
  let formatedDate = new Date(expiresIn).toDateString().toString().split(' ').slice(1, 4).join(' ')

  return (
    <List className={classes.listRoot}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="E-mail kompanije" secondary={companyEmail} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneInTalkIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Broj telefona" secondary={companyNumber} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ScheduleIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Oglas ističe" secondary={formatedDate} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Broj slobodnih mjesta" secondary={positionsLeft} />
      </ListItem>
      <Divider />
        <Typography
            variant="h5"
            align="center"
            className={classes.typoTitleRoot}
        >
            Opis radnog mjesta
        </Typography>
        <Box className={classes.boxRoot}>
            <Typography
                variant="caption"
                className={classes.typoDescRoot}
            >
              {description}
            </Typography>
        </Box>
    </List>
  );
}
