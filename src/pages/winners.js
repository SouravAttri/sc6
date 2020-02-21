import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { winners } from "../helpers/dataPaths"
import "../graphql/WinnerFragment"
import media from "../uikit/mediaTemplate"

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

  p {
    margin: 0 0 1rem;

    &.bigger {
      font-size: 1rem;
      margin: 1rem 0;

      ${media.desktop`
        font-size: 1.333rem;
        margin-bottom: 1.333rem;
      `}
    }
  }
`

const Winner = styled.div`
  border-top: 1px solid #eee;
  padding: 1rem 0 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    flex-direction: row;
  `}

  .imageContainer {
    flex-shrink: 0;
    text-align: center;
    margin: 0 0 1rem;

    ${media.tablet`
      margin: 0 1rem 0 0;
    `}

    img {
      width: 140px;
      border-radius: 70px;
      border: 1px solid #eee;
    }
  }

  .quote {
    text-align: center;

    ${media.tablet`
      text-align: left;
    `}

    blockquote {
      font-style: italic;
    }

    p {
      font-size: 0.75rem;
    }
  }
`

export const query = graphql`
  query GET_WINNERS {
    allDatoCmsWinner {
      nodes {
        ...Winner
      }
    }
  }
`

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Winners" />
    <Section>
      <h1>Winners</h1>
      <p className="bigger">
        Welcome to the Winner&apos;s Gallery! A place dedicated to winners of
        our competitions from the past, and perhaps also a place to draw
        inspiration from. Join us as we celebrate our champions!
      </p>
      {winners(data).map(winner => (
        <Winner key={winner.id}>
          <div className="imageContainer">
            <img
              src={`${winner.photo.url}?fit=crop&w=280&h=280&auto=format`}
              alt={winner.photo.alt}
            />
          </div>
          <div className="quote">
            <h3>{winner.title}</h3>
            <p>{winner.subline}</p>
            <blockquote>{winner.quote}</blockquote>
          </div>
        </Winner>
      ))}
    </Section>
  </Layout>
)

export default SecondPage
