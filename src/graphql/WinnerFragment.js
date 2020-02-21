import { graphql } from "gatsby"

export const query = graphql`
  fragment Winner on DatoCmsWinner {
    id
    title
    subline
    photo {
      alt
      url
    }
    quote
    partner
  }
`

export default () => {}
