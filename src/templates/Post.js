/* eslint-disable react/no-danger */
import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import media from "../uikit/mediaTemplate"
import "../graphql/PostFragment"

export const query = graphql`
  query GET_POST($slug: String!) {
    post: datoCmsPost(slug: { eq: $slug }) {
      ...Post
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

  img {
    margin: 0 -1rem 1.333rem;
    width: calc(100% + 2rem);
    max-width: unset;

    ${media.desktop`
      margin: 0 -2.369rem 1.333rem;
      width: calc(100% + 4.738rem);
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
`

const Post = ({ data: { post } }) => (
  <Layout>
    <SEO title={post.title} description={post.summary} />
    <Article>
      <p className="internalNavigation">
        <Link to="/posts">
          <FaArrowLeft />
          View all posts
        </Link>
      </p>
      <p className="smaller">Published on {post.postDate}</p>
      <h1>{post.title}</h1>
      <img
        alt={post.title}
        src={`${post.image.url}?fit=crop&w=1400&h=700&auto=format`}
      />
      <p className="bigger">{post.summary}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Article>
  </Layout>
)

export default Post
