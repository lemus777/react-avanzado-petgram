import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql, Query } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!) {
  photo(id: $id) {
    id
    categoryId
    src
    likes
    liked
    userId
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { photo = {} } = data

  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
