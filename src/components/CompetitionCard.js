import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import media from "../uikit/mediaTemplate"

const NewStar = props => (
  <svg viewBox="0 0 116.92 116.92" {...props}>
    <title>New</title>
    <g data-name="Layer 2">
      <path
        d="M115.78 61.43a4.44 4.44 0 000-5.94l-7-7.75a5.89 5.89 0 01-1.39-5.16l2.2-10.21a4.43 4.43 0 00-3-5.14L96.67 24a5.85 5.85 0 01-3.78-3.77l-3.2-9.95a4.42 4.42 0 00-5.14-3L74.33 9.53a5.87 5.87 0 01-5.16-1.38l-7.74-7a4.44 4.44 0 00-5.94 0l-7.75 7a5.85 5.85 0 01-5.16 1.38L32.37 7.34a4.42 4.42 0 00-5.14 3L24 20.25A5.82 5.82 0 0120.25 24l-9.95 3.23a4.42 4.42 0 00-3 5.14l2.23 10.21a5.85 5.85 0 01-1.38 5.16l-7 7.75a4.44 4.44 0 000 5.94l7 7.74a5.87 5.87 0 011.38 5.16L7.34 84.55a4.42 4.42 0 003 5.14l10 3.2A5.85 5.85 0 0124 96.67l3.21 9.94a4.43 4.43 0 005.14 3l10.21-2.2a5.89 5.89 0 015.16 1.39l7.75 7a4.44 4.44 0 005.94 0l7.74-7a5.9 5.9 0 015.16-1.39l10.22 2.2a4.43 4.43 0 005.14-3l3.2-9.94a5.89 5.89 0 013.78-3.78l9.94-3.2a4.43 4.43 0 003-5.14l-2.2-10.22a5.9 5.9 0 011.39-5.16zm-72.71 9.08h-5l-9.64-15.86v15.86h-5V46.4h5l9.68 15.9V46.4h5zm20.5 0H47.4V46.4h16.13v4H52.37v5.74h9.54v3.89h-9.54v6.46h11.2zm24.54 0h-5l-3.93-16.13-3.92 16.13h-5L64.91 46.4h5l3.26 17.13 4-17.13h4.2l4 17.16 3.14-17.16h4.95z"
        fill="#238bc0"
        data-name="Layer 1"
      />
    </g>
  </svg>
)

const NEW_LIMIT_DAYS = 1

const Card = styled.div`
  a {
    display: block;
    &:hover {
      opacity: 0.75;
    }
  }
  margin: 1rem 0 0;
  background: #efefef;

  h3 {
    font-size: 1.333rem;
    line-height: 1.2;
    margin: 0 0 1rem;
    color: #238bc0;
  }
  .flex {
    ${media.tablet`
      display: flex;
    `}

    .imageContainer {
      flex: 1 0 0;
      position: relative;

      .featured {
        position: absolute;
        left: 0;
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
      }
    }

    .contentContainer {
      flex: 1 0 0;
      padding: 1rem;
      position: relative;

      svg {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        width: 2.369rem;
      }
    }
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

const CompetitionCard = ({ competition }) => (
  <Card>
    <Link to={`/competitions/${competition.slug}`}>
      <div className="flex">
        <div className="imageContainer">
          <img
            alt={competition.title}
            src={`${competition.image.url}?fit=crop&w=560&h=480&auto=format`}
          />
          {competition.featured && <span className="featured">Featured</span>}
        </div>
        <div className="contentContainer">
          <h3>{competition.title}</h3>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: competition.summary }} />
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
          {competition.meta.firstPublishedAt <= NEW_LIMIT_DAYS && <NewStar />}
        </div>
      </div>
    </Link>
  </Card>
)

CompetitionCard.propTypes = {
  competition: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default CompetitionCard
