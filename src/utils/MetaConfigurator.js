import React from 'react'
import {Helmet} from 'react-helmet'

const MetaConfigurator = ({description, title, image}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
        </Helmet>
    )
}

export default MetaConfigurator
