import React from 'react';
import cx from 'clsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// TODO 1/25/20: Make the image and other stuff buttons.

const maxWidth = '346px'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  media: {
    height: '224px',
  },
  contentHeading: {
    fontSize: '28px',
    fontFamily: 'Archivo Narrow',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    marginBottom: '0.5em'
  },
  contentDate: {
    fontSize: '14px',
    fontFamily: 'Inconsolata',
    color: '#8D1C1C',
    paddingRight: '30px',
  },
  contentBlurb: {
    fontFamily: 'Inconsolata',
    fontSize: '14px',
  },
  content: {
    maxWidth: maxWidth,
    margin: '24px'
  }
}));

const Post = (props) => {
  const styles = useStyles();

  return (
    <Grid 
      container
      direction='column'
      alignItems='flex-start'
      justify='flex-start'
      className={ cx(styles.content) }
    >
      <Grid item>
        <Button disableRipple>
          <img
            className={ cx(styles.media) }
            src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
            }>
          </img>
        </Button>
    </Grid>
      <Grid item className={styles.contentDate}>
        <div>{props.date}</div>
      </Grid>

      <Grid 
        container
        direction='row'
        alignItems='center'
        justify='space-between'
      >
        <Grid item wrap='wrap' className={styles.contentHeading}>
          <div>{props.heading}</div>
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
