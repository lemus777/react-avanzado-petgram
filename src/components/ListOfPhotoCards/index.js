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
// DEPENDENCIES
// import React from "react";
// import { useQuery, gql } from "@apollo/client";

// COMPONENTS
// import { PhotoCard } from "../PhotoCard";

// const whitPhotos = gql`
//  query getPhotos {
//    photos {
//      id
//      categoryId
//      src
//      likes
//      userId
//      liked
//    }
//  }
// `;

// export const ListOfPhotoCards = () => {
//  const { loading, error, data } = useQuery(whitPhotos);

//  if (error) {
//    return <h2>Internal Server Error</h2>;
//  }
//  if (loading) {
//    return <h2>Loading...</h2>;
//  }

//  return (
//    <ul>
//      {data.photos.map((photo) => (
//        <PhotoCard key={photo.id} {...photo} />
//      ))}
//    </ul>
//  );
// };
