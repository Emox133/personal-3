import React from 'react'
import Slider from 'infinite-react-carousel';

import Banner1 from './../../images/logo-5.png'
import Banner2 from './../../images/logo-2.png'
import Banner3 from './../../images/logo-3.png'
import Banner4 from './../../images/logo-4.png'

export default function MaterialSlider () {
    const settings =  {
        arrows: false,
        autoplay: true,
        dots: true
    };

    const styles = {
      width: '100%',
      position: 'absolute',
      bottom: '20px',
      left: 0,
      textAlign: 'center'
    }

    return (
        <div style={{...styles}}>
        <Slider { ...settings }>
          <div>
            <img src={Banner1} alt="Company Logo" />
          </div>
          <div>
            <img src={Banner2} alt="Company Logo" />
          </div>
          <div>
            <img src={Banner3} alt="Company Logo" />
          </div>
          <div>
            <img src={Banner4} alt="Company Logo" />
          </div>
        </Slider>
      </div>
    )
}

