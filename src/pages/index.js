import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedCard from "../components/FeaturedCard"
import media from "../uikit/mediaTemplate"
import "../graphql/CompetitionFragment"

export const Hero = styled.div`
  background: url(https://www.datocms-assets.com/14866/1564671568-hero.jpg)
    no-repeat center center;
  background-size: cover;
  padding: 2.369rem;

  ${media.tablet`
    padding: 4.209rem;
  `}

  h1 {
    text-align: center;
    font-size: 2.369rem;
    line-height: 1;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

    ${media.desktop`
      font-size: 4.209em;
    `}

    span {
      display: block;
      padding: 0.75rem;
      font-size: 66%;
      font-weight: 400;
      font-family: "Roboto";
      text-transform: none;
    }
  }

  .cta {
    ${media.tablet`
      max-width: 320px;
      margin: 0 auto;
    `}
    a {
      display: block;
      border-radius: 1.777rem;
      border: none;
      background: rgba(35, 139, 192, 1);
      color: #ffffff;
      font-size: 1.333rem;
      font-weight: 700;
      line-height: 3rem;
      text-align: center;
      margin: 1.333rem;

      &:hover,
      &:active {
        border: none;
        opacity: 0.75;
      }
    }
  }
`

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;

  ${media.tablet`
    padding: 2.369rem;
  `}

  > h3 {
    font-size: 1rem;
    line-height: 2rem;
    color: #ffffff;
    text-transform: uppercase;
    padding: 0 1rem;
    background: linear-gradient(to bottom, #000 0%, #333 100%);
  }

  .featuredCompetitions {
    ${media.tablet`
      display: flex;
      flex-wrap: wrap;
      margin: 0 -0.5rem;

      > div {
        padding: 0 0.5rem;
        flex: 1 0 33.333%;
        display: flex;
      }
    `}
  }
`

export const query = graphql`
  query GET_FEATURED_COMPETITIONS {
    competitions: allDatoCmsCompetition(
      limit: 6
      filter: { approved: { eq: true }, featured: { eq: true } }
    ) {
      nodes {
        ...Competition
      }
    }
    count: allDatoCmsCompetition(filter: { approved: { eq: true } }) {
      totalCount
    }
  }
`

const getCompetitions = ({ competitions: { nodes } }) => nodes

const IndexPage = ({ data }) => (
  <Layout sidebar={false}>
    <SEO title="Home" />
    <Hero>
      <h1>
        <span>{data.count.totalCount} competitions in</span>
        Design, Business, Engineering
        <span>and more!</span>
      </h1>
      <div className="cta">
        <Link to="/competitions">Browse all</Link>
      </div>
    </Hero>
    <Section>
      <h3>Featured Competitions</h3>
      <div className="featuredCompetitions">
        {getCompetitions(data).map(competition => (
          <FeaturedCard key={competition.id} competition={competition} />
        ))}
      </div>
    </Section>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    competitions: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage
