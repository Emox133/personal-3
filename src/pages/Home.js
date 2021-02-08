import React from 'react'

function Home() {
    return (
        <>
        <div className="home-wrapper">
            <div className="home">
                <h2 className="home__title">Pronađi novi posao među X objavljenih oglasa!</h2>
                <form className="form--home home__box--sub">
                    <input type="text" className="home__input--1" placeholder="Unesite ključne riječi..."/>
                    <select className="home__input--2">
                        <option>IT</option>
                        <option>Medicina</option>
                        <option>Obrazovanje</option>
                        <option>Ekonomija</option>
                        <option>Transport</option>
                    </select>
                    <button className="btn btn--home">Potvrdi</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Home
