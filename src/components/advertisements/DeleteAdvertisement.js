import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import {makeStyles} from '@material-ui/core/styles'

import {useAdveristments} from './../../contexts/adveristmentContext'
import {useAuth} from './../../contexts/authContext'

const useStyles = makeStyles(theme => ({
    iconButtonRoot: {
        padding: 0
    }
}))

export default function DeleteAdvertisement({_id}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles()
//   const {user: {_id}} = useAuth()
  const {deleteAdvertisement} = useAdveristments()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Tooltip title="Obriši">
        <IconButton color="secondary" className={classes.iconButtonRoot} aria-label="delete" onClick={handleClickOpen}>
            <DeleteIcon />
        </IconButton>
    </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Obriši oglas?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Da li ste sigurni da želite obrisati ovaj oglas ?!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" onClick={() => deleteAdvertisement(_id)} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
