import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CompetitionCard from "../components/CompetitionCard"
import media from "../uikit/mediaTemplate"
import { competitions } from "../helpers/dataPaths"
import "../graphql/CompetitionFragment"

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;

  ${media.tablet`
    padding: 2.369rem;
  `}

  h1 {
    font-size: 1.777rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;

    ${media.desktop`
      font-size: 2.369rem;
    `}
  }

  .meta {
    margin-top: 1rem;
    font-size: 0.75rem;

    li {
      display: flex;
    }

    span {
      flex-shrink: 0;
      width: 75%;
    }

    span.label {
      font-weight: 700;
      margin-right: 1rem;
      width: 25%;
    }
  }
`

export const query = graphql`
  query GET_ALL_COMPETITIONS($today: Date!) {
    allDatoCmsCompetition(
      filter: { deadline: { gte: $today }, approved: { eq: true } }
      sort: { order: DESC, fields: meta___firstPublishedAt }
    ) {
      nodes {
        ...Competition
      }
    }
  }
`

const Competitions = ({ data }) => (
  <Layout>
    <SEO
      title="Competitions"
      description="Online free global competitions. Win Student Competitions, Challenges, Contests, Awards, Prizes, in business, management, design, arts, architecture, photo, fashion, engineering, computer sciences, math, law, social sciences, health sciences, natural sciences, music, economics, cash"
    />
    <Section>
      <h1>Competitions</h1>
      {competitions(data).map(competition => (
        <CompetitionCard key={competition.slug} competition={competition} />
      ))}
    </Section>
  </Layout>
)

Competitions.propTypes = {
  data: PropTypes.shape({
    allDatoCmsCompetition: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Competitions
