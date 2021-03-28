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
    formData.append('photo', image); 
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
    formData.append('name', fields.name)
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
              label="Pozicija"
              type="text"
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="companyName"
              id="companyName"
              label="Ime Kompanije"
              type="text"
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="location"
              id="location"
              label="Lokacija"
              type="text"
              fullWidth
              onChange={handleInputChange}
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
              label="E-Mail Kompanije"
              type="email"
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="expiresIn"
              id="expiresIn"
              placeholder="Oglas Ističe"
              className={classes.textFieldRoot}
              type="date"
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="positionsLeft"
              id="positionsLeft"
              label="Broj Slobodnih Mjesta"
              type="text"
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="companyNumber"
              id="companyNumber"
              label="Broj Telefona"
              type="tel"
              fullWidth
              onChange={handleInputChange}
            />
            <TextField
              name="description"
              id="description"
              multiline
              rows="5"
              label="Opis Radnog Mjesta"
              type="text"
              fullWidth
              onChange={handleInputChange}
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