import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import Image from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>My project portfolio from Sanity</h1>
    <ul style={{listStyle:'none', display:'flex', alignItems:'space-between', padding: 0}}>
      {data.allSanityProject.edges.map(({ node: project }) => (
      <li key={project.slug.current} style={{flex: '1 45%', flexWrap:'wrap', maxWidth:'45%', margin: '1rem'}}>
        <h2 style={{fontSize:'24px'}}>{project.title}</h2>
        <Image fluid={project.image.asset.fluid} alt={project.title} />
        <p style={{margin: '1rem'}}> {project.description}</p>
      </li>
    ))}</ul>
  </Layout>
)

export default IndexPage
