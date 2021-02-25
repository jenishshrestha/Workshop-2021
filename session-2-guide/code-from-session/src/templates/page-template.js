import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const pageTemplate = ({ data: { page } }) => {
  return (
    <Layout>
      {page.title} {page.content}
    </Layout>
  )
}

export default pageTemplate

export const pageQuery = graphql`
  query pageById($id: String!) {
    page: wpPage(id: { eq: $id }) {
      id
      title
      uri
      content
    }
  }
`
