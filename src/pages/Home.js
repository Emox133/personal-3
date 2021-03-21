import React, {useState} from 'react'
import Advertisements from './Advertisements'
import {useAdveristments} from '../contexts/adveristmentContext'
import Loader from '../utils/Loader'
import Slider from '../components/layout/Slider'
import CoockieFooter from '../components/layout/CoockieFooter'

function Home() {
    const {advertisements, loading} = useAdveristments()
    const [fields, setFields] = useState({
        name: '',
        category: ''
    })

    const filteredAdvertisements = advertisements.filter(el => {
        return el.name.includes(fields.name) && el.category.includes(fields.category)
    })

    const handleChange = e => {
        setTimeout(() => {
            setFields({
                ...fields,
                [e.target.name]: e.target.value
            })
        }, 2000)
    }
 
    let content = advertisements.length > 0 && !loading ? (
        <>
            <header className="home">
                {/* <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="./../images/video.mp4" type="video/mp4"/>
                    </video>
                </div> */}
                <h2 className="home__title">Pronađi novi posao među X objavljenih oglasa!</h2>
                {/* <Slider /> */}
                <form className="form--home home__box--sub">
                    <input name="name" type="text" className="home__input--1" placeholder="Unesite ključne riječi..." onChange={handleChange}/>
                    <select className="home__input--2" name="category" onChange={handleChange}>
                        <option>IT</option>
                        <option>Medicina</option>
                        <option>Obrazovanje</option>
                        <option>Ekonomija</option>
                        <option>Transport</option>
                        <option>Trgovina</option>
                        <option>Marketing</option>
                        <option>Privreda</option>
                    </select>
                    {/* <button className="btn btn--home">Potvrdi</button> */}
                </form>
                <CoockieFooter/>
            </header>
        <Advertisements filteredAdvertisements={filteredAdvertisements}/>     
        </>
    ) : <Loader />

    return content
}

export default Home
