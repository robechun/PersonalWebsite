import React from "react"
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';

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
    backgroundColor: '#31315C',
    height: '4.3em',
    paddingLeft: '30px',
    margin: '0px'
  },
  
  footer: {
    position: 'flex',
    bottom: '0',
    width: '100%',
    height: '2.5rem',
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

// TODO: footer
const Layout = (props) => {

  const { classes } = props;

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
        >
          <Grid item>
            <Link className={classes.title} href='/'>Robert Chung</Link>
          </Grid>
          <Grid item>
            <Link className={classes.links} href='/about'>ABOUT</Link>
          </Grid>
          <Grid item>
            <Link className={classes.links} href='/'>ARTICLES</Link>
          </Grid>
          <Grid item>
            <Link className={classes.links} href='/bookshelf'>BOOKSHELF</Link>
          </Grid>
          <Grid item>
            <Link className={classes.links} href='/projects'>PROJECTS</Link>
          </Grid>
        </Grid>
      </header>
      <div>{props.children}</div>
      <footer className={classes.footer}>bye world</footer>
    </div>
  );

}

export default withStyles(styles)(Layout);
