import React from "react"
import { withStyles } from '@material-ui/core/styles';
//import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import Post from '../components/post'
//import SEO from "../components/seo"
//import { rhythm } from "../utils/typography"

// TODO: figure out when to use dangerouslySetInnerHTML
//
const dummyData = [
  {
    title: 'We Got Game',
    datePublished: '072319',
    slurp: 'Homepage headlines have always been an important focus of attention. While web app builders see them as an essential detail of the entire composition, regular visitors see them as…'
  },
  {
    title: 'We Got Game2',
    datePublished: '072319',
    slurp: 'Homepage headlines have always been an important focus of attention. While web app builders see them as an essential detail of the entire composition, regular visitors see them as…'
  },
  {
    title: 'We Got Game3',
    datePublished: '072319',
    slurp: 'Homepage headlines have always been an important focus of attention. While web app builders see them as an essential detail of the entire composition, regular visitors see them as…'
  }
]


const styles = {
  pageTitle: {
    fontFamily: 'Sunflower',
    fontSize: '34px',
    fontWeight: '700',
    fontStyle: 'normal',
    margin: '1.3em'
  }
};


const BlogIndex = (props) => {

  const { classes } = props

    return (
      <Layout>
        <h2 className={classes.pageTitle}>Recent Posts</h2>
        <Post></Post>
      </Layout>
    )
}

export default withStyles(styles)(BlogIndex)

// TODO what is this bottom? 
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
