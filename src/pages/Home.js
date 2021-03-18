import React, {useState} from 'react'
import Advertisements from './Advertisements'
import {useAdveristments} from '../contexts/adveristmentContext'
import Loader from '../utils/Loader'
import Slider from '../components/layout/Slider'

function Home() {
    const {advertisements, loading} = useAdveristments()
    const [fields, setFields] = useState({
        name: ''
    })

    const filteredAdvertisements = advertisements.filter(el => {
        // if(fields.name.length > 0) {
        //    return el.name.includes(fields.name)
        // } 

        return el.name.includes(fields.name)
    })

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }
 
    let content = advertisements.length > 0 && !loading ? (
        <>
            <header className="home">
                <h2 className="home__title">Pronađi novi posao među X objavljenih oglasa!</h2>
                {/* <Slider /> */}
                <form className="form--home home__box--sub">
                    <input name="name" type="text" className="home__input--1" placeholder="Unesite ključne riječi..." onChange={handleChange}/>
                    <select className="home__input--2">
                        <option>IT</option>
                        <option>Medicina</option>
                        <option>Obrazovanje</option>
                        <option>Ekonomija</option>
                        <option>Transport</option>
                        <option>Trgovina</option>
                        <option>Marketing</option>
                        <option>Privreda</option>
                    </select>
                    <button className="btn btn--home">Potvrdi</button>
                </form>
            </header>
        <Advertisements filteredAdvertisements={filteredAdvertisements}/>     
        </>
    ) : <Loader />

    return content
}

export default Home
