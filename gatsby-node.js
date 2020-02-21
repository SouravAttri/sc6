const path = require("path")

const today = new Date()
  .toJSON()
  .slice(0, 10)
  .replace(/-/g, "-")

const QUERY = `
  query GET_PAGES {
    allDatoCmsCompetition(filter: {approved: {eq: true}}) {
      nodes {
        slug
      }
    }
    allDatoCmsPost(sort: { fields: [postDate], order: DESC }) {
      nodes {
        slug
      }
    }
  }
`
const getCompetitions = ({ allDatoCmsCompetition: { nodes } }) =>
  nodes.map(({ slug }) => `/competitions/${slug}`)

const getPosts = ({ allDatoCmsPost: { nodes } }) =>
  nodes.map(({ slug }) => `/posts/${slug}`)

exports.createPages = ({ graphql, actions }) => {
  const createPage = templatePath => pagePath =>
    actions.createPage({
      path: pagePath,
      component: path.resolve(templatePath),
      context: { slug: pagePath.split("/").pop() },
    })

  return new Promise(resolve => {
    graphql(QUERY).then(response => {
      getCompetitions(response.data).forEach(
        createPage("src/templates/Competition.js")
      )
      getPosts(response.data).forEach(createPage("src/templates/Post.js"))
      actions.createPage({
        path: "/competitions",
        component: path.resolve("src/templates/Competitions.js"),
        context: { today },
      })
    })
    resolve()
  })
}
