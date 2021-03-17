import React, {useRef} from 'react'
import {useAdveristments} from '../contexts/adveristmentContext'
import Advertisement from './Advertisement'
// import {useElementOnScreen} from './../hooks/useElementOnScreen'
import Loader from '../utils/Loader'

const Advertisements = () => {
    const {advertisements, visible, handlePageIncrease} = useAdveristments()
    const hasMore = useRef(true)

    let renderAdvertisements = advertisements.slice(0, visible).map((a, i) => {
        if(advertisements.length === i + 1) {
            hasMore.current = false
        }
        return <Advertisement posts={a} key={a._id}/>
    })
    console.log('Advertisements rendering')

    return (
        <main className="advert">
            <h2 className="advert__title">Izdvojeni oglasi</h2>
            <div className="advert__box">
                <div className="advert__content">
                    {renderAdvertisements}
                </div>
                   {hasMore.current && <button onClick={handlePageIncrease} style={{width: '20%', height: '30px', display: 'block', margin: '2rem auto 0 auto'}}>Učitaj više</button>}

                <div className="advert__sidebar">
                    <h2>&nbsp;</h2>
                </div>
            </div>
        </main>
    )
}

export default Advertisements
