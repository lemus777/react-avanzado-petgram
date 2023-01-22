import { gql } from '@apollo/client'
import { graphql } from 'graphql'

const GET_PHOTOS = gql`
query getPhotos ($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const whitPhotos = graphql(GET_PHOTOS)
