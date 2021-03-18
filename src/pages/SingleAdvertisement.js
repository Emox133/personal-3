import React from 'react'
import {useAdveristments} from '../contexts/adveristmentContext'
import Logo from '../images/g-logo.jpg'
import Loader from '../utils/Loader'

const SingleAdvertisement = () => {
    const {getAdvertisement, advertisement, loading} = useAdveristments()
    const {category, employees, expiresIn, location, website, name, logo} = advertisement
    return (
       !loading ? <div>
            <img style={{height: '200px', width: '400px'}} src={logo ? logo : <Logo />} alt="Company Logo"/>
            <h1>{name}</h1>
            <h5>{location}</h5>
            <h6>{website}</h6>
        </div> : <Loader />
    )
}

export default SingleAdvertisement
