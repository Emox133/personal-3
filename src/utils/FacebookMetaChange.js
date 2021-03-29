import React from 'react';
import MetaTags from 'react-meta-tags';
import {useAdveristments} from './../contexts/adveristmentContext'

export default function FacebookMetaChange () {
    const {advertisement} = useAdveristments()
    return (
        <div className="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta property="url" content={`http://localhost:3000/${advertisement._id}`} />
            <meta property="type" content="article" />
            <meta property="title" content={advertisement.name} />
            <meta property="description" content={advertisement.description} />
            <meta property="image" content="https://res.cloudinary.com/ddyyhypik/image/upload/v1617001994/xcuvhnugbpkgvgvkihv6.jpg" />
          </MetaTags>
        </div>
      )
}