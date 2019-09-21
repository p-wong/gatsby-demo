import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Item from "../components/item"
import Header from "../components/header"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Header headerText='Top News' />
        <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item header={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
                link={node.fields.slug}
          >
          </Item>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
