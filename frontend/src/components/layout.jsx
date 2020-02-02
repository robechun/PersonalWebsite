import React from "react"
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';

// TODO acutally get the nav bar working
// TODO: whitespace inbetween stuff
const styles = {
  title: {
    color: '#FFFFFF',
    fontSize: '64px',
    fontFamily: 'Qwigley',
    fontWeight: 'lighter',
    marginBottom: '0.1em'
  },

  header: {
    backgroundColor: '#31315C',
    height: '25em'
  },
  
  footer: {
    position: 'flex',
    bottom: '0',
    width: '100%',
    height: '2.5rem',
  },

  links: {
    fontFamily: 'Nunito',
    fontSize: '18px',
    color: '#A6B0EA',
    fontWeight: 'lighter',
    textDecoration: 'none',
    boxShadow: 'none',
    '&:hover, &:active': {
      color: '#A6B0EA',
    },
  }
};

// TODO: footer
// TODO: react router. donno if it's supposed to be in here or elsewhere
const Layout = (props) => {

  const { classes } = props;

  return (
    <div>
      <header className={classes.header}>
        <Grid 
          container
          direction='column'
          justify='center'
          alignItems='center'
          alignContent='center'
        >
          <Grid item>
            <h1 className={classes.title}>Robert Chung</h1>
          </Grid>
          <Grid 
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
            alignContent='center'
          >
            <Grid item>
              <Link className={classes.links} href='/about'>/about</Link>
            </Grid>
            <Grid item>
              <Link className={classes.links} href='/bookshelf'>/bookshelf</Link>
            </Grid>
            <Grid item>
              <Link className={classes.links} href='/projects'>/projects</Link>
            </Grid>
          </Grid>
        </Grid>
      </header>
      <div>{props.children}</div>
      <footer className={classes.footer}>bye world</footer>
    </div>
  );

}

export default withStyles(styles)(Layout);
