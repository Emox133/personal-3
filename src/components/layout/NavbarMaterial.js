import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button'
import { fade, makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import {useAuth} from './../../contexts/authContext'
import {useAdveristments} from './../../contexts/adveristmentContext'
import {useHistory} from 'react-router-dom'
import ModalMaterial from '../ModalMaterial'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  buttonRoot: {
    padding: '0',
    color: '#eee',
    letterSpacing: '.1em',
    textTransform: 'capitalize',
    minWidth: '0',
    marginRight : '1rem'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      position: 'absolute',
      right: '10px'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const {auth, handleLogout} = useAuth()
  const [open, setOpen] = useState(false)
  const {advertisements} = useAdveristments()
  const history = useHistory()

  const handleOpen = () => {
    setOpen(true)
}

const handleClose = (e) => {
    e.preventDefault()
    setOpen(false)
}

  let authBar = !auth && advertisements ? 
  (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" className={classes.buttonRoot} variant="text">
          Home
        </Button>
        <Button component={Link} to="/signup" className={classes.buttonRoot} variant="text">
          Registracija
        </Button>
        <Button component={Link} to="/login" className={classes.buttonRoot} variant="text">
          Prijava
        </Button>
      </Toolbar>
    </AppBar>
  </div>
  ) : advertisements ? (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" className={classes.buttonRoot} variant="text">
          Home
        </Button>
        <Button onClick={handleOpen} component={Link} to="" className={classes.buttonRoot} variant="text">
          Novi Oglas
        </Button>
        <Button component={Link} to="/moji-oglasi" className={classes.buttonRoot} variant="text">
          Moji Oglasi
        </Button>
        <Button onClick={() => {handleLogout(history)}} component={Link} to="/" className={classes.buttonRoot} variant="text">
          Odjava
        </Button>
        {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div> */}
      </Toolbar>
    </AppBar>
  </div>
  ) : null

  return (
    <>
    {authBar}
    <ModalMaterial isOpen={open} close={handleClose}/>
    </>
  );
}
