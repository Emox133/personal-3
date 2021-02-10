import React from 'react'
// import imageOne from '../images/job-1.jpg'
// import imageTwo from '../images/job-2.jpg'
// import imageThree from '../images/job-3.jpg'
// import imageFour from '../images/job-4.jpg'
// import imageFive from '../images/job-5.jpg'

const Advertisement = ({posts}) => {
    const {category, location, name, company, logo} = posts

    return (
        <div className="advert__primary">
            <div className="advert__primary-colored"></div>
            <div className="advert__primary-logo"></div>
            <div className="advert__primary-text">
                <h2 className="advert__primary-company">{logo}</h2>
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
            <button className="advert__primary-btn btn-2">Konkuriši</button>
        </div>
    )
}

export default Advertisement