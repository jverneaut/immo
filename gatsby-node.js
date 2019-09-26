const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allProduct {
        nodes {
          slug
        }
      }
    }
  `)

  const productTemplate = path.resolve("./src/templates/product.js")

  const { allProduct } = result.data
  allProduct.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: productTemplate,
      context: {
        slug: node.slug,
        layout: "map",
      },
    })
  })
}
