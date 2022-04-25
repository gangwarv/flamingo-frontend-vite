import {gql} from '@apollo/client/core';

export const GET_BLOGS = gql`
    query Blog ($title: String!) {
        blog(title: $title) {
            _id
            body
            title
        }
      }
`