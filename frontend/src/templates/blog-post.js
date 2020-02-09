import React from "react"
import { graphql } from "gatsby"
import { useTheme, withStyles } from '@material-ui/core/styles';
import Layout from "../components/layout/layout";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PaperContent from '../components/posts/paperContent';
import PaperlessContent from '../components/posts/paperlessContent';

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
    padding: '50px',
    marginTop: '-7em',
    zIndex: '2',
    position: 'relative'
  },
  imageStyle: {
    width: '100%',
    height: 'auto'
  }
}

const BlogPostTemplate = ({ classes, data, pageContext }) => {

  const post = data.ghostPost;
  //const siteTitle = data.site.siteMetadata.title;
  //const { previous, next } = pageContext;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return(
      <Layout>
        {/*<SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />*/}
        <img src={post.feature_image} className={classes.imageStyle} alt=''/>

        {smallScreen 
          ? <PaperlessContent
              title={post.title}
              html={post.html}
            />
          : <PaperContent
              title={post.title}
              html={post.html}
            />
        }

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
      feature_image
    }
  }
`
