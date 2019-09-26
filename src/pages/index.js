import React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = props => {
  const { allProduct } = props.data
  const products = allProduct.nodes

  return (
    <>
      <h1>Immobilier</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={"/" + product.slug}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allProduct {
      nodes {
        id
        title
        slug
      }
    }
  }
`
