const data = require("./data")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  data.products.forEach(product => {
    const productMeta = {
      id: createNodeId(`product-${product.id}`),
      parent: null,
      children: [],
      internal: {
        type: `Product`,
        mediaType: `text/html`,
        contentDigest: createContentDigest(product),
      },
    }

    const node = Object.assign({}, product, productMeta)
    createNode(node)
  })
}
