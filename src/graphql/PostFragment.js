import { graphql } from "gatsby"

export const query = graphql`
  fragment Post on DatoCmsPost {
    slug
    title
    summary
    content
    postDate(formatString: "MMMM DD, YYYY")
    meta {
      firstPublishedAt
    }
    image {
      url
    }
  }
`

export default () => {}
