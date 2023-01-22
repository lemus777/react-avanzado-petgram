import { gql } from '@apollo/client'
import { graphql } from 'graphql'

export const whitPhotos = graphql(gql`
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
`)
