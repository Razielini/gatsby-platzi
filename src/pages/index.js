import React from 'react'
import { Link, graphql } from 'gatsby'
import { Jumbo, SEO, Products } from '../components'

export const query = graphql`
  query GET_DATA {
    allSite{
      edges {
        node {
          siteMetadata{
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              img
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log('data ::', data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={ data.allStripeSku.edges } />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/gracias">Go to page 2</Link>
    </>
  )
}

export default IndexPage
