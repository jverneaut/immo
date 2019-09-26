import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { Link } from "gatsby"

export default props => {
  const { product, allProduct } = props.data

  return (
    <>
      <Helmet>
        <title>{product.title}</title>
      </Helmet>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.img} alt="" />

      {allProduct.nodes.map(product => (
        <li key={product.id}>
          <Link to={"/" + product.slug}>{product.title}</Link>
        </li>
      ))}
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: product(slug: { eq: $slug }) {
      title
      description
      img
      lat
      lng
    }
    allProduct: allProduct {
      nodes {
        id
        title
        slug
        lat
        lng
      }
    }
  }
`
