import React from 'react'
import Paper from '@material-ui/core/Paper'
import { useTheme, withStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Layout from '../components/layout/layout'
import Title from '../components/title.jsx'

import SEO from '../components/seo';

const styles = {
  paperStyle: {
    margin: '30px',
    padding: '30px'
  },
  content: {
    margin: '0px',
  }
}

const About = ({ classes, data }) => {

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const aboutPage = data.ghostPage;

  return (
    <>
      <Layout>
        <SEO 
          title={aboutPage.meta_title || aboutPage.title}
          description={aboutPage.meta_description}
        />
        {smallScreen ? 
          <>
          <Title className={classes.content }>About</Title>
          <div className={classes.content} 
            dangerouslySetInnerHTML={{ __html: aboutPage.html }} />
          </>
        :
          <>
          <Paper elevation={3} className={classes.paperStyle}>
              <Title className={classes.content }>About</Title>
              <div className={classes.content} 
                dangerouslySetInnerHTML={{ __html: aboutPage.html }}/>
          </Paper>
          </>
        }
      </Layout>
    </>
  );
  
}

export default withStyles(styles)(About);

export const pageQuery = graphql`
  query aboutPageQuery {
    ghostPage(title: {eq: "About"}) {
      html
      title
      meta_description
      meta_title
    }
  }
`

