import React, {useEffect} from 'react'
import {useAdveristments} from '../contexts/adveristmentContext'
import Add from './../images/add.jpg'
import {useLocation} from 'react-router-dom'
import Loader from './../utils/Loader'

const SingleAdvertisement = () => {
    const {getAdvertisement, advertisement, loading} = useAdveristments()
    const {expiresIn, website, name, logo, description, companyEmail, companyNumber, companyName} = advertisement
    let formatedDate = new Date(expiresIn).toDateString().toString().split(' ').slice(1, 4).join(' ')

    const location = useLocation()

    const id = location.pathname.split`/`[1]

    useEffect(() => {
        getAdvertisement(id)
    }, [])

    return (
       !loading && advertisement._id ? <div className="advert__single">
            <div className="advert__single-sidebar advert__single-sidebar--1">
                {/* <img src={Add} alt="add" className="advert__single-add" />
                <img src={Add} alt="add" className="advert__single-add" />
                <img src={Add} alt="add" className="advert__single-add" /> */}
                <h2>Sidebar 1</h2>
                <div className="advert__single-add advert__single-add--1">Reklama</div>
                <div className="advert__single-add advert__single-add--2">Reklama</div>
                <div className="advert__single-add advert__single-add--3">Reklama</div>
            </div>
            <div className="advert__single-main">
               <img className="advert__single-logo" src={logo} alt="company logo" />
               <header className="advert__single-text">
                    <h1 className="advert__single-name">{name}</h1>
                    <p className="advert__single-description">
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                        lorem ispum dolor sir amet.
                    </p>
               </header>
               <div className="advert__single-box">
                    <div className="advert__single-box--mini">
                        <span>Kompanija</span>
                        <h1 className="advert__single-text-sub">{companyName}</h1>
                    </div>
                    <div className="advert__single-box--mini">
                        <span>Broj telefona</span>
                        <h1 className="advert__single-text-sub">{companyNumber}</h1>
                    </div>
                    <div className="advert__single-box--mini">
                        <span>Ističe</span>
                        <h1 className="advert__single-text-sub">{formatedDate}</h1>
                    </div>
                    <div className="advert__single-box--mini">
                        <span>Email Kompanije</span>
                        <h1 className="advert__single-text-sub">{companyEmail}</h1>
                    </div>
               </div>
            </div>
            <div className="advert__single-sidebar advert__single-sidebar--2">
                     {/* <img src={Add} alt="add" className="advert__single-add" />
                <img src={Add} alt="add" className="advert__single-add" />
                <img src={Add} alt="add" className="advert__single-add" /> */}
                <h2>Sidebar 2</h2>
                <div className="advert__single-add advert__single-add--4">Reklama</div>
                <div className="advert__single-add advert__single-add--5">Reklama</div>
                <div className="advert__single-add advert__single-add--6">Reklama</div>
            </div>
        </div> : <Loader />
    )
}

export default SingleAdvertisement
