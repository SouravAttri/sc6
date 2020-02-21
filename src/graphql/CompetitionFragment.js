import { graphql } from "gatsby"

export const query = graphql`
  fragment Competition on DatoCmsCompetition {
    id
    competitionUrl
    deadline
    description
    featured
    organizer
    slug
    summary
    title
    categories {
      title
      slug
    }
    educationLevel {
      title
    }
    image {
      url
    }
    meta {
      firstPublishedAt(difference: "days")
    }
    prize {
      title
      slug
    }
    region {
      title
    }
    sidebarBanner {
      url
      alt
    }
  }
`
export default () => {}
