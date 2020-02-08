import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import { SocialIcon } from 'react-social-icons';

import { withStyles } from '@material-ui/core/styles';

const themeColor = '#31315C';

const styles = {
  title: {
    color: '#FFFFFF',
    fontSize: '33px',
    fontFamily: 'Oleo Script',
    marginTop: '0em',
    marginBottom: '0em',
    paddingTop: '16px',
    '&:hover, &:active': {
      color: '#FFFFFF',
      textDecoration: 'none'
    }
  },

  header: {
    backgroundColor: themeColor,
    height: '4.3em',
    paddingLeft: '30px',
    margin: '0px'
  },
  
  footer: {
    position: 'flex',
    bottom: '0',
    width: '100%',
    height: '3.5rem',
    backgroundColor: themeColor,
    paddingRight: '20px',
  },

  links: {
    fontFamily: 'Nunito',
    fontSize: '15px',
    color: '#A6B0EA',
    fontWeight: 'lighter',
    textDecoration: 'none',
    boxShadow: 'none',
    '&:hover, &:active': {
      color: '#A6B0EA',
    },
  },
};

const socialLinks = {
  height: 40,
  width: 40
};

const socialLinkColor = 'FF9D9D';

const Layout = (props) => {

  const { classes } = props;
  const [isClient, setIsClient] = useState(0);

  // Two pass rendering because we have hydration problems.
  // See: https://github.com/gatsbyjs/gatsby/issues/17914
  useEffect(() => {
    setIsClient(1);
  }, []);

  return (
    <div>
      <header>
        <Grid 
          container
          direction='row'
          justify='flex-start'
          alignItems='baseline'
          alignContent='center'
          spacing={6}
          className={classes.header}
          key={isClient}
        >
          <Hidden implementation='css' xsDown>
            <Grid item>
              <Link className={classes.title} href='/'>Robert Chung</Link>
            </Grid>
          </Hidden>
          <Hidden smDown>
          <Grid item>
            <Link className={classes.links} href='/'>ARTICLES</Link>
          </Grid>
          <Grid item>
            <Link className={classes.links} href='/about'>ABOUT</Link>
          </Grid>
          <Grid item>
            <Link className={classes.links} href='/bookshelf'>BOOKSHELF</Link>
          </Grid>
          <Grid item>
            <Link className={classes.links} href='/projects'>PROJECTS</Link>
          </Grid>
          </Hidden>
        </Grid>
      </header>
      <div>{props.children}</div>
      <footer className={classes.footer}>
        <Grid 
          container
          direction='row'
          justify='flex-end'
          alignContent='center'
          spacing={2}
        >
          <Grid item>
            <SocialIcon 
              url='https://linkedin.com/in/robertchung97'
              bgColor={socialLinkColor}
              style={socialLinks}
            />
          </Grid>
          <Grid item>
            <SocialIcon 
              url='https://github.com/Altrum/'
              bgColor={socialLinkColor}
              style={socialLinks}
            />
          </Grid>
          <Grid item>
            <SocialIcon 
              url='mailto:robertchung97@gmail.com'
              bgColor={socialLinkColor}
              style={socialLinks}
            />
          </Grid>
        </Grid>
      </footer>
    </div>
  );

}

export default withStyles(styles)(Layout);
