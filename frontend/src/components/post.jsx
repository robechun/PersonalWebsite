import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';

// TODO: make it actually work with real data and make things look more how I want it to look 

const maxWidth = '346px'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    backgroundColor: '#CBCBCB'
    
  },

  media: {
    height: '224px'
  },
  contentHeading: {
    fontSize: '28px',
    fontFamily: 'Archivo Narrow',
    fontWeight: 'bold'
  },
  contentDate: {
    fontSize: '14px',
    fontFamily: 'Inconsolata',
    color: '#8D1C1C',
    paddingRight: '30px'
  },
  contentBlurb: {
    fontFamily: 'Inconsolata',
    fontSize: '14px',
  },
  content: {
    maxWidth: maxWidth,
    margin: 'auto'
  }

  //cta: {
    //marginTop: 24,
    //textTransform: 'initial',
  //},
}));

const Post = (props) => {
  const styles = useStyles();

  return (
    <Grid 
      container
      direction='column'
      alignItems='center'
      justify='center'
      className={ cx(styles.content) }
    >
      <Grid item>
        <img
          className={ cx(styles.media) }
          src={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
          }>
        </img>
      </Grid>

      <Grid 
        container
        direction='row'
        alignItems='center'
        justify='space-between'
        className={ cx(styles.content) }
      >
        <Grid item className={styles.contentHeading}>
          <div>{props.heading}</div>
        </Grid>
        <Grid item className={styles.contentDate}>
          <div>{props.date}</div>
        </Grid>
      </Grid>

      <Grid item className={styles.contentBlurb}>
        <p>{props.blurb}</p>
      </Grid>

    </Grid>


  );
};

Post.propTypes = {
  heading: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired
}

export default Post;
