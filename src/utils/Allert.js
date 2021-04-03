import React from 'react'

const Allert = ({severity, children}) => {

    let content =
    <div className={severity}>
        {children}
    </div> 

    return content
}

export default Allert
