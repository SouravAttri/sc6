import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./Sidebar"
import media from "../uikit/mediaTemplate"
import "../graphql/CompetitionFragment"
import "../graphql/PostFragment"

const wrapperBaseCss = css`
  max-width: 1180px;
  margin: 0 auto;

  ${media.desktop`
    display: flex;
  `}
`

const WithSidebar = styled.div`
  ${wrapperBaseCss}
  main {
    flex-grow: 1;
  }
  aside {
    background: rgba(255, 255, 255, 0.9);
    margin: 1rem 0 0 0;
    padding: 1rem;

    flex-shrink: 0;
    img {
      width: 100%;
    }

    ${media.desktop`
      margin: 0 0 0 1rem;

      > div {
        width: 280px;
      }
    `}
  }
`

const WithoutSidebar = styled.div`
  ${wrapperBaseCss}
`

const getSidebarBanners = ({ allDatoCmsCompetition: { edges } }) =>
  edges.map(
    ({
      node: {
        competitionUrl,
        sidebarBanner: { url: imageUrl },
      },
    }) => ({
      competitionUrl,
      imageUrl,
    })
  )

const getRandomFeaturedCompetition = ({ featured: { edges } }) =>
  edges[Math.floor(Math.random() * edges.length)].node

const getPosts = ({ allDatoCmsPost: { edges } }) =>
  edges.map(({ node }) => node)

const Layout = ({ children, sidebar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allDatoCmsCompetition(filter: { sidebarBanner: { url: { ne: null } } }) {
        edges {
          node {
            ...Competition
          }
        }
      }
      allDatoCmsPost(
        sort: { fields: meta___firstPublishedAt, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            ...Post
          }
        }
      }
      featured: allDatoCmsCompetition(filter: { featured: { eq: true } }) {
        edges {
          node {
            ...Competition
          }
        }
      }
    }
  `)

  const banners = getSidebarBanners(data)
  const posts = getPosts(data)
  const featuredCompetitions = [getRandomFeaturedCompetition(data)]

  const Wrapper = sidebar ? WithSidebar : WithoutSidebar

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <main className={sidebar ? "with-sidebar" : "without-sidebar"}>
          {children}
        </main>
        {sidebar && (
          <Sidebar
            banners={banners}
            posts={posts}
            featured={featuredCompetitions}
          />
        )}
      </Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  sidebar: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  sidebar: true,
}

export default Layout
