import React from 'react'
import {Link} from 'react-router-dom'
import { useAdveristments } from '../contexts/adveristmentContext'
import SingleAdvertisement from './SingleAdvertisement'
import {useHistory} from 'react-router-dom'

const Advertisement = ({posts}) => {
    const {getAdvertisement} = useAdveristments()
    const {category, location, name, company, logo, _id} = posts
    const history = useHistory()

    const handleClick = () => {
        getAdvertisement(_id, history)
    }

    return (
        <div className="advert__primary">
            <div className="advert__primary-colored"></div>
            <div className="advert__primary-logo">
              {logo && logo.startsWith('https://res.cloudinary.com/') ? <img className="advert__primary-img" src={logo} alt="Company Logo"/> : null}
            </div>
            <div className="advert__primary-text">
                {/* <h2 className="advert__primary-company">{logo}</h2> */}
                <p className="advert__primary-position">{name}</p>
            </div>
            <div className="advert__primary-shaded">
                <div className="advert__primary-box">
                    <span><strong>Lokacija:</strong></span>
                    <span>{location}</span>
                </div>
                <div className="advert__primary-box">
                <span><strong>Kategorija:</strong></span>
                    <span>{category}</span>
                </div>
                <div className="advert__primary-box">
                <span><strong>Ističe:</strong></span>
                    <span>Mon Feb 09</span>
                </div>
            </div>
            <Link to={_id}>
                <button onClick={handleClick} className="advert__primary-btn btn-2">Konkuriši</button>
            </Link>
           {history.location.pathname !== '/' ? <SingleAdvertisement /> : null}
        </div>
    )
}

export default Advertisement