import React from 'react'
// import imageOne from '../images/job-1.jpg'
// import imageTwo from '../images/job-2.jpg'
// import imageThree from '../images/job-3.jpg'
// import imageFour from '../images/job-4.jpg'
import imageFive from '../images/job-5.jpg'

const Advertisement = ({posts}) => {
    const {category, location, name} = posts

    return (
        <div className="advert__primary">
            <img className="advert__primary-logo" src={imageFive} alt="Company logo"></img>
            <h2 className="advert__primary-name">{name}</h2>
            <div className="advert__primary-details">
                <p className="advert__primary-location">{location}</p>
                <p className="advert__primary-category">{category}</p>
                <p className="advert__primary-expiration">Mon Feb 08</p>
            </div>
            <button className="btn btn--apply">Konkuriši</button>
        </div>
    )
}

export default Advertisement