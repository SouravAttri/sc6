import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Card = styled.div`
  margin: 1rem 0 0;
  a {
    background: #efefef;

    display: block;
    &:hover {
      opacity: 0.75;
    }
  }

  h3 {
    font-size: 1.333rem;
    line-height: 1.2;
    margin: 0 0 1rem;
    color: #238bc0;
  }

  .contentContainer {
    padding: 1rem;
  }
`

const FeaturedCard = ({ competition }) => (
  <Card>
    <Link to={`/competitions/${competition.slug}`}>
      <div className="imageContainer">
        <img
          alt={competition.title}
          src={`${competition.image.url}?fit=crop&w=560&h=480&auto=format`}
        />
      </div>
      <div className="contentContainer">
        <h3>{competition.title}</h3>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: competition.summary }} />
      </div>
    </Link>
  </Card>
)

FeaturedCard.propTypes = {
  competition: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default FeaturedCard
