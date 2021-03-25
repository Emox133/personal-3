import React, {useState} from 'react'
import axios from 'axios'

const Modal = ({isOpen, close}) => {
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
        formData.append('email', fields.email)
        formData.append('telephone', fields.telephone)
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
    
    const handleImage = e => {
        image = e.target.files[0]
        formData.append('photo', image); 
    };


    return (
        <div className={isOpen ? "modal" : "modal__closed"}>
            <div className="modal__layer" onClick={close}></div>
            <div className="modal__content">
                <h2 className="modal__title">Novi Oglas</h2>
                <form encType="multipart/form-data" className="form modal__form" onSubmit={handleSubmit}>
                    {errors.name ? <span>{errors.name.message}</span> : null}
                    <input type="text" placeholder="Pozicija" name="name" onChange={handleInputChange}/>
                    {errors.companyName ? <span>{errors.companyName.message}</span> : null}
                    <input type="text" placeholder="Ime kompanije" name="companyName" onChange={handleInputChange}/>
                    {errors.location ? <span>{errors.location.message}</span> : null}
                    <input type="text" placeholder="Lokacija" name="location" onChange={handleInputChange}/>
                    <label style={{color: '#555', fontSize: '1.2rem'}} htmlFor="logo">Učitaj sliku kompanije</label>
                    <input type="file" multiple={false} name="photo" onChange={handleImage} id="logo" />
                    <input type="text" placeholder="Web stranica" name="website" onChange={handleInputChange}/>
                    {errors.companyEmail ? <span>{errors.companyEmail.message}</span> : null}
                    <input type="email" placeholder="E-Mail kompanije" name="companyEmail" onChange={handleInputChange}/>
                    {errors.expiresIn ? <span>{errors.expiresIn.message}</span> : null}
                    <input type="date" placeholder="Oglas ističe" name="expiresIn" onChange={handleInputChange}/>
                    {errors.positionsLeft ? <span>{errors.positionsLeft.message}</span> : null}
                    <input type="number" placeholder="Broj slobodnih mjesta" name="positionsLeft" onChange={handleInputChange}/>
                    {errors.companyNumber ? <span>{errors.companyNumber.message}</span> : null}
                    <input type="tel" placeholder="Broj telefona" name="companyNumber" onChange={handleInputChange}/>
                    {errors.description ? <span>{errors.description.message}</span> : null}
                    <textarea rows="5" type="textarea" placeholder="Opis radnog mjesta" name="description" onChange={handleInputChange}/>
                    <div className="modal__buttons">
                        <button onClick={close} className="btn--close btn">Otkaži</button>
                        <button type="submit" className="btn--submit btn">Potvrdi</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
