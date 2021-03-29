import React from "react";
import {Helmet} from "react-helmet";
import {useAdveristments} from './../contexts/adveristmentContext'
 
export default function FacebookMetaChange() {
    const {advertisement} = useAdveristments()
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Živinice Connected</title>
                <meta name="og:url" content={`http://localhost:3000/${advertisement._id}`} />
                <meta name="og:type" content="article" />
                <meta name="og:title" content={advertisement.name} />
                <meta name="og:description" content={advertisement.description} />
                <meta name="og:image" content="https://res.cloudinary.com/ddyyhypik/image/upload/v1617001994/xcuvhnugbpkgvgvkihv6.jpg" />
            </Helmet>
        </div>
    );
};




// import React from 'react';
// import MetaTags from 'react-meta-tags';
// import {useAdveristments} from './../contexts/adveristmentContext'

// export default function FacebookMetaChange () {
//     const {advertisement} = useAdveristments()
//     return (
//         <div className="wrapper">
//           <MetaTags>
//             <title>Živinice Connected</title>
//             <meta name="og:url" content={`http://localhost:3000/${advertisement._id}`} />
//             <meta name="og:type" content="article" />
//             <meta name="og:title" content={advertisement.name} />
//             <meta name="og:description" content={advertisement.description} />
//             <meta name="og:image" content="https://res.cloudinary.com/ddyyhypik/image/upload/v1617001994/xcuvhnugbpkgvgvkihv6.jpg" />
//           </MetaTags>
//         </div>
//       )
// }