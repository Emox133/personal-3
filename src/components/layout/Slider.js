import React, {useEffect} from 'react'

const Slider = () => {
    let counter = 1;

    useEffect(() => {
        setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
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
                    <img src="" alt="Logo"/>
                </div>
                <div className="slide">
                    <img src="" alt="Logo"/>
                </div>
                <div className="slide">
                    <img src="" alt="Logo"/>
                </div>
                <div className="slide">
                    <img src="" alt="Logo"/>
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

export default Slider
