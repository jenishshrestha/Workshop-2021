const path = require(`path`)
const chunk = require(`lodash/chunk`)

// exports.createPages = ({ graphql, actions, reporter }) => {
exports.createPages = async gatsbyUtilities => {
  const pages = await getPages(gatsbyUtilities)

  if (!pages.length) {
    return
  }

  await createIndividualPages({ pages, gatsbyUtilities })
}

async function getPages({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPages {
      allWpPage {
        edges {
          page: node {
            id
            title
            uri
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPage.edges
}

const createIndividualPages = async ({ pages, gatsbyUtilities }) => {
  Promise.all(
    pages.map(({ page }) => {
      gatsbyUtilities.actions.createPage({
        path: page.uri,
        component: path.resolve(`./src/templates/page-template.js`),
        context: {
          id: page.id,
        },
      })
    })
  )
}
