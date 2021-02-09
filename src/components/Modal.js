import React, {useState} from 'react'
import axios from 'axios'

const Modal = ({isOpen, close}) => {
    const [fields, setFields] = useState({
        name: '',
        company: '',
        location: '',
        employees: '',
        website: '',
        description: '',
        category: ''
    })
    
    const handleInputChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            ...fields
        }

        axios.post('/oglasi', data).then(res => {
            if(res.status === 201) {
                alert('Novi oglas uspješno objavljen. 🎉')
                close(e)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err.response)
            alert('Something went wrong. 😰')
            close(e)
        })
    }
    
    return (
        <div className={isOpen ? "modal" : "modal__closed"}>
            <div className="modal__layer" onClick={close}></div>
            <div className="modal__content">
                <h2 className="modal__title">Novi Oglas</h2>
                <form className="form modal__form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Naslov" name="name" onChange={handleInputChange}/>
                    <input type="text" placeholder="Kompanija" name="company" onChange={handleInputChange}/>
                    <input type="text" placeholder="Lokacija" name="location" onChange={handleInputChange}/>
                    <input type="number" placeholder="Broj zaposlenih" name="employees" onChange={handleInputChange}/>
                    <input type="text" placeholder="Web stranica" name="website" onChange={handleInputChange}/>
                    <input type="textarea" placeholder="Opis radnog mjesta" name="description" onChange={handleInputChange}/>
                    <select style={{position: "static", width: "85%"}} name="category" onChange={handleInputChange}>
                        <option value="IT">IT</option>
                        <option value="Medicina">Medicina</option>
                        <option value="Obrazovanje">Obrazovanje</option>
                        <option value="Ekonomija">Ekonomija</option>
                        <option value="Transport">Transport</option>
                        <option value="Trgovina">Trgovina</option>
                        <option value="Privreda">Privreda</option>
                        <option value="Marketing">Marketing</option>
                    </select>
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
