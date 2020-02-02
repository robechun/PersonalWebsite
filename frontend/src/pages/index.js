import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import { graphql } from "gatsby"


//import Bio from "../components/bio"
import Layout from '../components/layout'
import Post from '../components/post'
import Title from '../components/title'
//import SEO from "../components/seo"
//import { rhythm } from "../utils/typography"

// TODO: figure out when to use dangerouslySetInnerHTML

const styles = {
  offset: {
    margin: '3em'
  }
}

const BlogIndex = ({ classes, data }) => {

  const posts = data.allGhostPost.edges;
    return (
      <Layout>

        <Grid 
          container
          directon='column'
          justify='flex-start'
          alignItems='center'
          className={classes.offset}
        >
          <Title>Recent Posts</Title>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='baseline'
          >
            {posts.map((post) => 
              <Post 
                heading={post.node.title}
                blurb={post.node.excerpt}
                date={post.node.created_at}
                slug={post.node.slug}
                imageUrl={post.node.feature_image}
              />)
            }
          </Grid>
        </Grid>

      </Layout>
    )
}

export default withStyles(styles)(BlogIndex);

export const pageQuery = graphql`
  query GhostPostQuery($limit: Int = 15) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
    ) {
      edges {
        node {
          excerpt
          title
          created_at(formatString: "YYYY-MM-DD")
          slug
          feature_image
        }
      }
    }
  }
`
