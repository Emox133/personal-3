import React from 'react';
import MetaTags from 'react-meta-tags';
import {useAdveristments} from './../contexts/adveristmentContext'

export default function FacebookMetaChange () {
    const {advertisement} = useAdveristments()
    return (
        <div className="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta property="og:url" content={`http://localhost:3000/${advertisement._id}`} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={advertisement.name} />
            <meta property="og:description" content={advertisement.description} />
            <meta property="og:image" content="https://res.cloudinary.com/ddyyhypik/image/upload/v1617001994/xcuvhnugbpkgvgvkihv6.jpg" />
          </MetaTags>
        </div>
      )
}