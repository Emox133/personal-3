import React from 'react'
import Advertisements from './Advertisements'
import {useAdveristments} from '../contexts/adveristmentContext'
import Loader from '../utils/Loader'
import Slider from '../components/layout/Slider'

function Home() {
    const {advertisements} = useAdveristments()

    let content = advertisements.length > 0 ? (
        <>
            <header className="home">
                <h2 className="home__title">Pronađi novi posao među X objavljenih oglasa!</h2>
                {/* <Slider /> */}
                <form className="form--home home__box--sub">
                    <input type="text" className="home__input--1" placeholder="Unesite ključne riječi..."/>
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
        <Advertisements />     
        </>
    ) : <Loader />

    return content
}

export default Home
