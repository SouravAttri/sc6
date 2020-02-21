import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Articles, Tags, Author, Programmes } from "../uikit";
import { extractCollectionNodes } from "../helpers/parseDatoCmsNodes";

import Article from "./BlogArticle.styles";

export const query = graphql`
  query GetArticle($slug: String!, $categorySlug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      title
      publishedOn(formatString: "MMMM DD, YYYY")
      content
      featuredImage {
        url
        title
      }
      author {
        name
        role
        description
        image {
          url
        }
      }
      categories {
        name
        slug
      }
      tags {
        id
        name
      }
      programmes {
        id
        title
        url
        image {
          url
        }
        university {
          logo {
            url
          }
          brandColor {
            hex
          }
          name
        }
      }
      seoMetaTags {
        tags {
          tagName
          content
          attributes {
            property
            content
            name
          }
        }
      }
    }
    allDatoCmsArticle(
      filter: {
        categories: { slug: { eq: $categorySlug } }
        slug: { ne: $slug }
        locale: { eq: "en" }
      }
      sort: { fields: [publishedOn], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          slug
          title
          publishedOn(formatString: "MMMM DD, YYYY")
          promoted
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;

const BlogArticle = ({
  data: {
    datoCmsArticle: {
      publishedOn,
      title,
      content,
      featuredImage,
      author,
      categories,
      tags,
      seoMetaTags,
      programmes,
    },
    allDatoCmsArticle,
  },
  location,
}) => (
  <Layout title={categories.name} seo={seoMetaTags}>
    <Article>
      <p className="postCategory">
        <Link to={`/blog/${categories.slug}/`}>{categories.name}</Link>
      </p>
      <h1>{title}</h1>
      <p className="postMeta">
        Posted on {publishedOn} by {author.name}
      </p>
      <div className="featuredImage">
        <div>
          <img
            alt={title}
            src={`${
              featuredImage.url
            }?fit=crop&w=1400&h=700&bm=darken&balph=50&bs=inherit&blend64=aHR0cHM6Ly93d3cuZGF0b2Ntcy1hc3NldHMuY29tLzk0MDYvMTU0OTg4ODE2My10cmVhdG1lbnQtb3ZlcmxheS5qcGc&auto=format`}
          />
        </div>
        <p>{featuredImage.title}&nbsp;</p>
      </div>
      <div className="articleWrapper">
        {/* eslint-disable react/no-danger */}
        <div
          className="articleContent"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Tags tags={tags} />
      </div>
      <Author author={author} />
    </Article>
    {allDatoCmsArticle && (
      <Articles
        articles={extractCollectionNodes(allDatoCmsArticle)}
        title="Related stories"
      />
    )}
    {programmes && !!programmes.length && (
      <Programmes
        programmes={programmes}
        title="Related programmes"
        divider
        location={location.pathname}
      />
    )}
  </Layout>
);

export default BlogArticle;
