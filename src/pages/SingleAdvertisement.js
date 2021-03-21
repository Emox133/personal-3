import React from 'react'
import {useAdveristments} from '../contexts/adveristmentContext'
import Logo from '../images/g-logo.jpg'
import Loader from '../utils/Loader'

const SingleAdvertisement = () => {
    const {getAdvertisement, advertisement, loading} = useAdveristments()
    const {category, employees, expiresIn, location, website, name, logo} = advertisement
    return (
    //    !loading ? <div>
    //         <img src={logo ? logo : <Logo />} alt="Company Logo"/>
    //         <h1>{name}</h1>
    //         {/* <h1>{logo}</h1> */}
    //         <h5>{location}</h5>
    //         {/* <h6>{website}</h6> */}
    //         <h1>{category}</h1>
    //     </div> : <Loader />
    <div className="advert__single">
        <div className="advert__single-sidebar advert__single-sidebar--1">
            <h1>Sidebar 1</h1>
        </div>
        <div className="advert__single-main">
            <h1>Center</h1>
        </div>
        <div className="advert__single-sidebar advert__single-sidebar--2">
            <h1>Sidebar 2</h1>
        </div>

        <footer className="advert__single-banner">
            <div className="advert__single-box--1">Reklama 1</div>
            <div className="advert__single-box--2">Reklama 2</div>
            <div className="advert__single-box--3">Reklama 3</div>
            <div className="advert__single-box--4">Reklama 4</div>
            <div className="advert__single-box--5">Reklama 5</div>
            <div className="advert__single-box--6">Reklama 6</div>
        </footer>
    </div>
    )
}

export default SingleAdvertisement
