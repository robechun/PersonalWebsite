import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from '../components/layout'
import Post from '../components/post'
//import SEO from "../components/seo"
//import { rhythm } from "../utils/typography"

// TODO: figure out when to use dangerouslySetInnerHTML

const styles = {
  pageTitle: {
    fontFamily: 'Sunflower',
    fontSize: '34px',
    fontWeight: '700',
    fontStyle: 'normal',
    margin: '1.3em'
  },
};

// TODO 1/25/20: dynamic post creation
const BlogIndex = ({ classes, data }) => {

  const posts = data.allGhostPost.edges;
    return (
      <Layout>
        <main>
          <h2 className={classes.pageTitle}>Recent Posts</h2>
        </main>
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
            />)
          }
        </Grid>

      </Layout>
    )
}

export default withStyles(styles)(BlogIndex)

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
        }
      }
    }
  }
`
