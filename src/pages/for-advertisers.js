import React from "react"
import styled from "styled-components"
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

  ul {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 1rem -1rem;

    ${media.tablet`
      flex-direction: row;
    `}

    li {
      font-size: 0.75rem;
      line-height: 1.2;
      flex: 1;
      padding: 1rem;
    }

    span {
      font-size: 2.369rem;
      font-weight: 700;
      font-family: "Roboto Condensed";
      display: block;

      &.blue {
        color: #1e77b2;
      }

      &.yellow {
        color: #ffa200;
      }

      &.red {
        color: #a10017;
      }
    }
  }

  .salesforceForm {
    .fieldWrapper {
      margin: 1rem 0;

      label {
        font-weight: 700;
        font-family: "Roboto Condensed";
        display: block;
      }

      input,
      textarea {
        border: 1px solid #ccc;
        font-family: inherit;
        width: 100%;
        padding: 5px;
      }
    }

    input[type="submit"] {
      border: none;
      margin: 1rem 0;
      padding: 0;
      width: auto;
      overflow: visible;
      color: inherit;
      font: inherit;
      line-height: normal;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;
      border-radius: 1.777rem;
      background: rgba(35, 139, 192, 1);
      color: #ffffff;
      font-size: 1rem;
      font-weight: 400;
      line-height: 3rem;
      text-align: center;
      padding: 0 1rem;

      &:hover,
      &:active {
        border: none;
        opacity: 0.75;
      }
    }
  }
`

const ForAdvertisers = () => (
  <Layout>
    <SEO title="For advertisers" />
    <Section>
      <h1>For advertisers</h1>
      <p className="bigger">
        We specialise in reaching international students in higher education
        through competition marketing. No other online listing of academic
        competitions gives you a better reach.
      </p>
      <ul className="figures">
        <li>
          <span className="red">600,000</span>
          <strong>global members</strong> actively seeking online competitions
        </li>
        <li>
          <span className="blue">1,000,000</span>
          <strong>potential candidates</strong> reached through social media
          activation across Facebook, Twitter, Weibo and Instagram
        </li>
        <li>
          <span className="yellow">80,000</span>
          <strong>website visitors</strong> per month
        </li>
      </ul>
      <div className="salesforceForm">
        <h3>Get in touch and let us help you promote your competitions.</h3>
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
        >
          <input type="hidden" name="oid" value="00Db0000000Ipbo" />
          <input
            type="hidden"
            name="retURL"
            value="http://studentcompetitions.com/thank-you"
          />
          <input type="hidden" name="lead_source" value="Sc.com Contact" />
          <div className="fieldWrapper">
            <label htmlFor="first_name">First name*</label>
            <input type="text" id="first_name" name="first_name" required />
          </div>
          <div className="fieldWrapper">
            <label htmlFor="last_name">Last name*</label>
            <input type="text" id="last_name" name="last_name" required />
          </div>
          <div className="fieldWrapper">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="fieldWrapper">
            <label htmlFor="company">Organization*</label>
            <input type="text" id="company" name="company" required />
          </div>
          <div className="fieldWrapper">
            <label htmlFor="description">Reason(s) for contacting us</label>
            <input
              type="text"
              id="description"
              name="description"
              required=""
            />
          </div>
          <div className="fieldWrapper">
            <input
              type="submit"
              name="submit"
              value="Get in touch"
              id="ss-submit"
            />
          </div>
        </form>
      </div>
    </Section>
  </Layout>
)

export default ForAdvertisers
