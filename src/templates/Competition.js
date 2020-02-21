import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
import { Link, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FieldWrapper from "../components/FieldWrapper"
import media from "../uikit/mediaTemplate"
import "../graphql/CompetitionFragment"

export const query = graphql`
  query GET_COMPETITION($slug: String!) {
    competition: datoCmsCompetition(slug: { eq: $slug }) {
      ...Competition
    }
  }
`

export const Form = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  margin: 1rem 0 0;

  ${media.desktop`
    padding: 2.369rem;
  `}

  h3 {
    font-size: 1.333rem;
    line-height: 1.2;
    margin: 0 0 1rem;
    color: #a10017;
  }

  .flexWrapper {
    ${media.desktop`
      display: flex;
      margin: 0 -1rem;

      div {
        flex: 1;
        padding: 0 1rem;

        input {
          width: 100%;
        }
      }
    `}
  }

  input {
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
    color: inherit;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    width: 100%;
  }

  .select-css {
    display: block;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
    color: inherit;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    border-color: #888;
  }
  .select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  .select-css option {
    font-weight: normal;
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
    background: #a10017;
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
`

export const Article = styled.article`
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
    margin: 0 0 0 -1px;

    ${media.desktop`
      font-size: 2.369rem;
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

  .bigger p {
    font-size: 1rem;
    margin-bottom: 1rem;

    ${media.desktop`
      font-size: 1.333rem;
      margin-bottom: 1.333rem;
    `}
  }

  img {
    margin: 0 -1rem;
    width: calc(100% + 2rem);
    max-width: unset;

    ${media.desktop`
      margin: 0;
      width: 100%;
    `}
  }

  a {
    border-bottom: 1px solid;

    &:hover {
      border-bottom: 1px dashed;
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

  .meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    li {
      width: 50%;
      padding-right: 0.75rem;
      margin: 0 0 1rem;
    }

    span.label {
      font-weight: 700;
      display: block;
    }
  }

  .imageContainer {
    position: relative;

    .deadline {
      position: absolute;
      left: -1rem;
      top: 1rem;
      padding: 0 1.777rem 0 1rem;
      background: url(https://www.datocms-assets.com/14866/1564659203-flag.png)
        no-repeat right;
      background-size: cover;
      font-size: 16px;
      line-height: 1.777rem;
      font-weight: 700;
      display: flex;
      align-items: center;

      ${media.desktop`
        left: 0;
      `}
    }
  }

  .competitionOverview {
    .competitionBox {
      background: rgba(35, 139, 192, 0.1);
      margin: 0 -1rem 1rem;
      padding: 1rem;
    }

    ${media.desktop`
      display: flex;
      margin: 0 -2.369rem 1.777rem;


      .competitionBox {
        margin: 0;
        width: 50%;
        flex-shrink: 0;
        justify-content: space-between;
        display: flex;
        flex-flow: column;
      }
    `}
  }

  .competitionCTA {
    display: block;
    border-radius: 1.777rem;
    border: none;
    background: rgba(35, 139, 192, 1);
    color: #ffffff;
    font-size: 1.333rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;

    &:hover,
    &:active {
      border: none;
      opacity: 0.75;
    }
  }
`

const Competition = ({ data: { competition } }) => (
  <Layout>
    <SEO title={competition.title} description={competition.summary} />
    <Article>
      <p className="internalNavigation">
        <Link to="/competitions">
          <FaArrowLeft />
          View all competitions
        </Link>
      </p>
      <h1>{competition.title}</h1>
      <p>Organized by {competition.organizer}</p>
      <div className="competitionOverview">
        <div className="imageContainer">
          <img
            alt={competition.title}
            src={`${competition.image.url}?fit=crop&w=560&h=480&auto=format`}
          />
          <span className="deadline">
            {moment(competition.deadline).fromNow(true)} left to enter
          </span>
        </div>
        <div className="competitionBox">
          <ul className="meta">
            <li>
              <span className="label">Organizer</span>
              <span>{competition.organizer}</span>
            </li>
            <li>
              <span className="label">Category</span>
              <span>
                {competition.categories.map(({ title }) => title).join(", ")}
              </span>
            </li>
            <li>
              <span className="label">Prize</span>
              <span>
                {competition.prize.map(({ title }) => title).join(", ")}
              </span>
            </li>
            <li>
              <span className="label">Region</span>
              <span>
                {competition.region.map(({ title }) => title).join(", ")}
              </span>
            </li>
            <li>
              <span className="label">Eligibility</span>
              <span>
                {competition.educationLevel
                  .map(({ title }) => title)
                  .join(", ")}
              </span>
            </li>
            <li>
              <span className="label">Deadline</span>
              <span>{competition.deadline}</span>
            </li>
          </ul>
          <OutboundLink
            className="competitionCTA"
            href={competition.competitionUrl}
            target="_blank"
          >
            Go compete!
          </OutboundLink>
        </div>
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <div
        className="bigger"
        dangerouslySetInnerHTML={{ __html: competition.summary }}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: competition.description }} />
    </Article>
    <Form>
      <form
        action="https://www.getdrip.com/forms/971511433/submissions"
        method="post"
        data-drip-embedded-form="971511433"
      >
        <h3>Get the latest competitions directly to your Inbox</h3>
        <p>
          Sign up to receive updates about any new competitons and articles we
          publish.
        </p>
        <div className="flexWrapper">
          <FieldWrapper>
            <label htmlFor="drip-email">Email Address</label>
            <input type="email" id="drip-email" name="fields[email]" required />
          </FieldWrapper>
          <FieldWrapper>
            <label>Choose your interest</label>
            <select className="select-css" name="fields[sc_interest]">
              <option value="arts-photography">Arts/Photography</option>
              <option value="business">Business</option>
              <option value="design-architecture">Design/Architecture</option>
              <option value="education">Education</option>
              <option value="fashion">Fashion</option>
              <option value="law">Law</option>
              <option value="mathematics">Mathematics</option>
              <option value="natural-sciences">Natural Sciences</option>
              <option value="social-sciences">Social Sciences</option>
              <option value="tech-and-engineering">Tech & Engineering</option>
            </select>
          </FieldWrapper>
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex="-1"
              autoComplete="false"
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Sign Up"
            data-drip-attribute="sign-up-button"
          />
        </div>
      </form>
    </Form>
  </Layout>
)

Competition.propTypes = {
  data: PropTypes.shape({
    competition: PropTypes.shape({
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      organizer: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      region: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      prize: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Competition
