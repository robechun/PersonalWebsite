import React, { useEffect } from "react"
import Prism from "prismjs";
import { graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PaperContent from '../components/posts/paperContent';
import PaperlessContent from '../components/posts/paperlessContent';

import SEO from "../components/seo"
//import { rhythm, scale } from "../utils/typography"

// enable java code style
require("prismjs/components/prism-java");

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

  // Need this to render highlighting. Also need the setTimeout() (very important)
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);

  const post = data.ghostPost;
  //const { previous, next } = pageContext;
  const mobileScreen = useMediaQuery('(max-width:400px)');

  return(
    <>
      <SEO
        title={post.meta_title || post.title}
        description={post.meta_description || post.excerpt}
      />
      <img src={post.feature_image} className={classes.imageStyle} alt=''/>

      {mobileScreen 
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
    </>
    )
}

export default withStyles(styles)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      html
      excerpt
      title
      slug
      reading_time
      feature_image
      meta_title
      meta_description
    }
  }
`
