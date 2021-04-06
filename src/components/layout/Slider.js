import React, {useEffect} from 'react'
import Banner1 from './../../images/logo-5.png'
import Banner2 from './../../images/logo-2.png'
import Banner3 from './../../images/logo-3.png'
import Banner4 from './../../images/logo-4.png'

const Slider = () => {
    useEffect(() => {
        let counter = 1;
        setInterval(() => {
            if(window.location.pathname && window.location.pathname === '/') {
                document.getElementById('radio' + counter).checked = true;
            }
            counter++;
            if(counter > 4){
                counter = 1
            }
        }, 3000)
    }, [])

    return (
        <div className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div className="slide first">
                    <img src={Banner1} alt="Banner"/>
                </div>
                <div className="slide">
                    <img src={Banner2} alt="Banner"/>
                </div>
                <div className="slide">
                    <img src={Banner3} alt="Banner"/>
                </div>
                <div className="slide">
                    <img src={Banner4} alt="Banner"/>
                </div>

                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
            </div>

            <div className="navigation-manual">
                <label htmlFor="radio1" className="manual-btn"></label>
                <label htmlFor="radio2" className="manual-btn"></label>
                <label htmlFor="radio3" className="manual-btn"></label>
                <label htmlFor="radio4" className="manual-btn"></label>
            </div>
        </div>
    )
}

export const MemoizedSlider = React.memo(Slider)

export default Slider
