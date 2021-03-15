import React from 'react'
import {useAdveristments} from '../contexts/adveristmentContext'
import Advertisement from './Advertisement'

const Advertisements = () => {
    const {advertisements, handlePageIncrease} = useAdveristments()

    let renderAdvertisements = advertisements.map(a => {
        return <Advertisement posts={a} key={a._id}/>
    })

    return (
        <main className="advert">
            <h2 className="advert__title">Izdvojeni oglasi</h2>
            <div className="advert__box">
                <div className="advert__content">
                    {renderAdvertisements}
                </div>
                <button onClick={handlePageIncrease} style={{marginTop: '1rem', width: '10%', margin: '0 auto', padding: '1rem'}}>Load more</button>

                <div className="advert__sidebar">
                    <h2>&nbsp;</h2>
                </div>
            </div>
        </main>
    )
}

export default Advertisements
