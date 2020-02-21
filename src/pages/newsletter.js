import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import media from "../uikit/mediaTemplate"

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;

  ${media.desktop`
    padding: 2.369rem;
  `}

  h1 {
    font-size: 1.777rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 1rem -1px;

    ${media.desktop`
      font-size: 2.369rem;
      margin: 0 0 1.333rem -1px;
    `}
  }

  h3 {
    font-size: 1.333rem;
    margin: 1.333rem 0 1rem;
    line-height: 1.2;
    font-weight: 700;

    ${media.desktop`
      font-size: 1.777rem;
      margin: 1.333rem 0 0.75rem;
    `}
  }

  p {
    margin: 0 0 1rem;

    &.bigger {
      font-size: 1rem;
      margin-bottom: 1rem;

      ${media.desktop`
        font-size: 1.333rem;
        margin-bottom: 1.333rem;
      `}
    }

    &.smaller {
      font-size: 0.75rem;
    }
  }

  .internalNavigation {
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #238bc0;

    a {
      border: none;
    }

    a:hover {
      border: none;
      opacity: 0.75;
    }

    svg {
      margin-right: 0.25rem;
    }
  }
`

const Newsletter = () => (
  <Layout>
    <SEO title="Newsletter subscription - Thank you" />
    <Section>
      <h1>Thank you for signing up</h1>
      <p className="bigger">
        You have now successfully subscribed to our newsletter.
      </p>
      <p className="internalNavigation">
        <Link to="/competitions">
          <FaArrowLeft />
          Back to all competitions
        </Link>
      </p>
    </Section>
  </Layout>
)

export default Newsletter
