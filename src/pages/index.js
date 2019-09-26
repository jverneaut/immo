import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

const IndexPage = props => {
  const { allProduct } = props.data
  const products = allProduct.nodes

  return (
    <>
      <Helmet>
        <title>Accueil - L'agence immobilière</title>
      </Helmet>
      <h1>L'agence immobilière</h1>
      <p>Nous sommes une agence immobilère</p>
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
