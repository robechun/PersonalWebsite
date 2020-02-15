import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import { graphql } from "gatsby"

//import Bio from "../components/bio"
import PostCard from '../components/postcard'
import Title from '../components/title'
//import SEO from "../components/seo"
//import { rhythm } from "../utils/typography"

const styles = {
  offset: {
    margin: '2em 2em 0em 2em'
  },
  content: {
    maxWidth: '346px',
    margin: '24px',
  },
}

const BlogIndex = ({ classes, data }) => {

  const posts = data.allGhostPost.edges;
    return (
        <Grid 
          container
          directon='column'
          justify='flex-start'
          alignItems='center'
        >
          <div className={classes.offset}>
            <Title>Recent Posts</Title>
          </div>
          <Grid
            container
            direction='row'
            justify='center'
            alignContent='center'
          >
            {posts.map((post) => 
              <Grid 
                item 
                className={classes.content} 
                key={post.node.title}
              >
                <PostCard 
                  heading={post.node.title}
                  blurb={post.node.excerpt}
                  date={post.node.created_at}
                  slug={post.node.slug}
                  imageUrl={post.node.feature_image}
                />
              </Grid>
              )
            }
          </Grid>
        </Grid>
    )
}

export default withStyles(styles)(BlogIndex);

// Only grab things that have the tag 'blog'
export const pageQuery = graphql`
  query BlogPostQuery($limit: Int = 15) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        filter: {tags: {elemMatch: {name: {eq: "blog"}}}}
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
