import React, {useState} from 'react';
import axios from 'axios'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textFieldRoot: {
    marginTop: '16px'
  }
}))

export default function FormDialog({isOpen, close}) {
    const [fields, setFields] = useState({
      name: '',
      companyName: '',
      companyEmail: '',
      companyNumber: '',
      location: '',
      expiresIn: '',
      website: '',
      description: '',
      positionsLeft: ''
  })

  const [errors, setErrors] = useState({
      name: '',
      companyName: '',
      location: '',
      expiresIn: '',
      companyEmail: '',
      companyNumber: '',
      positionsLeft: '',
      description: ''
  })

  const classes = useStyles()

  const handleImageChange = () => {
    const file = document.getElementById('photo');
    file.click();
  };

  const handleImage = e => {
    image = e.target.files[0]
    // setFields({
    //   ...fields,
    //   photo: image
    // })
    formData.append('photo', image)
  };

  const handleInputChange = (e) => {
    setFields({
        ...fields,
        [e.target.name]: e.target.value
    })
  }

  let image;
  const formData = new FormData();

  const handleSubmit = e => {
    e.preventDefault()
    // CONSIDER ALTERNATIVE
    formData.append('name', fields.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll('Đ', 'Dj')
    .replaceAll('đ', 'dj'));
    // formData.append('photo', fields.photo); 
    formData.append('companyName', fields.companyName)
    formData.append('companyEmail', fields.companyEmail)
    formData.append('companyNumber', fields.companyNumber)
    formData.append('location', fields.location)
    formData.append('expiresIn', fields.expiresIn)
    formData.append('website', fields.website)
    formData.append('description', fields.description)
    formData.append('positionsLeft', fields.positionsLeft)

    axios({
        method: "post",
        url: "/oglasi",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(res => {
        if(res.status === 201) {
            alert('Novi oglas uspješno objavljen. 🎉')
            close(e)
            window.location.reload()
        }
    }).catch(err => {
        console.log(err.response)
        // alert('Something went wrong. 😰')
        const errObj = err.response.status !== 403 ? err.response.data.error.errors : {
            name: '',
            company: '',
            location: '',
            companyEmail: '',
            companyNumber: '',
            positionsLeft: '',
            description: ''
        } 
        setErrors({...errObj})
        // close(e)
    })
  }

  return (
    <div className={isOpen ? 'modal' : 'modal__closed'}>
      <Dialog open={isOpen} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novi Oglas</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ispunite polja ispod kako biste objavili oglas.
          </DialogContentText>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
              name="photo"
              id="photo"
              hidden="hidden"
              type="file"
              onChange={handleImage}
              // error
              // id="outlined-error-helper-text"
              // label={errors.combinedMessage ? 'Error' : null}
              // helperText={errors.combinedMessage ? errors.combinedMessage : null}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={handleImageChange}
            >
              Učitaj logo kompanije
            </Button>
            <TextField
              name="name"
              id="name"
              type="text"
              fullWidth
              onChange={handleInputChange}
              error={errors.name && errors.name.message}
              label={errors.name ? 'Error' : 'Pozicija'}
              helperText={errors.name ? errors.name.message : null}
            />
            <TextField
              name="companyName"
              id="companyName"
              type="text"
              fullWidth
              onChange={handleInputChange}
              error={errors.companyName && errors.companyName.message}
              label={errors.companyName ? 'Error' : "Ime Kompanije"}
              helperText={errors.companyName ? errors.companyName.message : null}
            />
            <TextField
              name="location"
              id="location"
              type="text"
              fullWidth
              onChange={handleInputChange}
              error={errors.location && errors.location.message}
              label={errors.location ? 'Error' : "Lokacija"}
              helperText={errors.location ? errors.location.message : null}
            />
            <TextField
              name="website"
              id="website"
              label="Web Stranica"
              type="text"
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="companyEmail"
              id="companyEmail"
              type="email"
              fullWidth
              onChange={handleInputChange}
              error={errors.companyEmail && errors.companyEmail.message}
              label={errors.companyEmail ? 'Error' : "E-Mail Kompanije"}
              helperText={errors.companyEmail ? errors.companyEmail.message : null}
            />
            <TextField
              name="expiresIn"
              id="expiresIn"
              placeholder="Oglas Ističe"
              className={classes.textFieldRoot}
              type="date"
              fullWidth
              onChange={handleInputChange}
              error={errors.expiresIn && errors.expiresIn.message}
              helperText={errors.expiresIn ? errors.expiresIn.message : null}
            />
            <TextField
              name="positionsLeft"
              id="positionsLeft"
              type="text"
              fullWidth
              onChange={handleInputChange}
              error={errors.positionsLeft && errors.positionsLeft.message}
              label={errors.positionsLeft ? 'Error' : "Broj Slobodnih Mjesta"}
              helperText={errors.positionsLeft ? errors.positionsLeft.message : null}
            />
            <TextField
              name="companyNumber"
              id="companyNumber"
              type="tel"
              fullWidth
              onChange={handleInputChange}
              error={errors.companyNumber && errors.companyNumber.message}
              label={errors.companyNumber ? 'Error' : "Broj Telefona"}
              helperText={errors.companyNumber ? errors.companyNumber.message : null}
            />
            <TextField
              name="description"
              id="description"
              multiline
              rows="5"
              type="text"
              fullWidth
              onChange={handleInputChange}
              error={errors.description && errors.description.message}
              label={errors.description ? 'Error' : "Opis Radnog Mjesta"}
              helperText={errors.description ? errors.description.message : null}
            />
        <DialogActions>
          <Button variant="contained" onClick={close} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}