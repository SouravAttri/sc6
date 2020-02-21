import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import media from "../uikit/mediaTemplate"
import { posts } from "../helpers/dataPaths"
import "../graphql/PostFragment"

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

  .posts {
    border-top: 1px solid #eee;
    padding: 1rem 0 0;
    margin: 1rem 0 0;

    h3 {
      font-size: 1.333rem;
      margin: 0 0 0.563rem;
      line-height: 1.2;
      font-weight: 700;
      color: #238bc0;

      &:hover {
        opacity: 0.75;
      }
    }

    .postDate {
      font-size: 0.75rem;
      margin-top: 0.563rem;
    }
  }
`

export const query = graphql`
  query GET_POSTS {
    allDatoCmsPost(sort: { fields: [postDate], order: DESC }) {
      nodes {
        ...Post
      }
    }
  }
`

const Posts = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      description="Online free global competitions. Win Student Competitions, Challenges, Contests, Awards, Prizes, in business, management, design, arts, architecture, photo, fashion, engineering, computer sciences, math, law, social sciences, health sciences, natural sciences, music, economics, cash"
    />
    <Section>
      <h1>Latest Posts</h1>
      {posts(data).map(post => (
        <div className="posts" key={post.slug}>
          <h3>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.summary}</p>
          <p className="postDate">Posted on {post.postDate}</p>
        </div>
      ))}
    </Section>
  </Layout>
)

Posts.propTypes = {
  data: PropTypes.shape({
    allDatoCmsPost: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Posts
