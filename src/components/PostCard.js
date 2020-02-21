import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import media from "../uikit/mediaTemplate"

const Card = styled.div`
  background: #efefef;
  margin: 1rem 0 0;

  .contentContainer {
    padding: 1rem;

    h3 {
      font-size: 1rem;
      line-height: 1.2;
      margin: 0 0 0.563rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`

const PostCard = ({ post }) => (
  <Card>
    <div className="imageContainer">
      <Link to={`/posts/${post.slug}`}>
        <img
          alt={post.title}
          src={`${post.image.url}?fit=crop&w=560&h=280&auto=format`}
        />
      </Link>
    </div>
    <div className="contentContainer">
      <Link to={`/posts/${post.slug}`}>
        <h3>{post.title}</h3>
      </Link>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.summary }} />
    </div>
  </Card>
)

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostCard
