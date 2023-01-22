import React from 'react'
import { PhotoCard } from '../PhotoCard'
import db from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {db.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

// Si funcionara vercel sería así:
// import React from 'react'
// import { PhotoCard } from '../PhotoCard'

// export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
//   return (
//     <ul>
//       {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
//     </ul>
//   )
// }
