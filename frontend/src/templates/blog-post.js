import React from "react"
import { graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from "../components/layout"
import Title from '../components/title'


//import Bio from "../components/bio"
//import SEO from "../components/seo"
//import { rhythm, scale } from "../utils/typography"

const styles = {
  article: { 
    fontFamily: 'Raleway',
    fontSize: '16px',
  },
  paperStyle: {
    margin: '50px',
    padding: '50px'
  }

}

const BlogPostTemplate = ({ classes, data, pageContext }) => {

  const post = data.ghostPost;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return(
      <Layout>
        {/*<SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />*/}
        {/*TODO image here*/}
        <Paper className={classes.paperStyle}>
          <article>
            <header>
              <Title>{post.title}</Title>
            </header>
            <section 
              className={classes.article}
              dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr/>
          </article>
        </Paper>

        {/*<nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>*/}
      </Layout>
    )
}

export default withStyles(styles)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    ghostPost(slug: { eq: $slug }) {
      id
      html
      title
      slug
      reading_time
    }
  }
`
