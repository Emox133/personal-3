import React, {useState} from 'react'
import Advertisements from './Advertisements'
import {useAdveristments} from '../contexts/adveristmentContext'
import Loader from '../utils/Loader'
import {MemoizedSlider} from '../components/layout/Slider'
import CoockieFooter from '../components/layout/CoockieFooter'

function Home() {
    const {advertisements, loading} = useAdveristments()
    const [fields, setFields] = useState({
        name: ''
    })

    const filteredAdvertisements = advertisements.filter(el => {
        return el.name.includes(fields.name)
    })

    const handleChange = e => {
        setTimeout(() => {
            setFields({
                ...fields,
                [e.target.name]: e.target.value
            })
        }, 2000)
    }
 
    let content = advertisements && !loading ? (
        <>
            <header className="home">
                {/* <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="./../images/video.mp4" type="video/mp4"/>
                    </video>
                </div> */}
                <h2 className="home__title">Pronađi novi posao među X objavljenih oglasa!</h2>
                <MemoizedSlider />
                <form className="form--home home__box--sub">
                    <input name="name" type="text" className="home__input--1" placeholder="Unesite ključne riječi..." onChange={handleChange}/>
                </form>
                <CoockieFooter/>
            </header>
        <Advertisements filteredAdvertisements={filteredAdvertisements}/>     
        </>
    ) : <Loader />

    return content
}

export default Home
