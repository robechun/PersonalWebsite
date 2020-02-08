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
    marginBottom: '0.5em',
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
    color: '#000000',
  },
  content: {
    maxWidth: maxWidth,
    margin: '24px',
    marginLeft: '0px'
  },
  link: {
    '& a': {
      color: '#000000'
    },
    '& a:hover, & a:active': {
      color: '#e32'
    },
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
      xs={12}
    >
      <Grid item>
        <Button href={props.slug} disableRipple>
          <img className={ cx(styles.media) } src={props.imageUrl} alt=''/>
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
        <Grid item className={ cx(styles.contentHeading, styles.link) }>
          <a href={props.slug}>{props.heading}</a>
        </Grid>
      </Grid>

      <Grid item className={ cx(styles.contentBlurb, styles.link) }>
        <a href={props.slug}>{props.blurb}</a>
      </Grid>

    </Grid>


  );
};

Post.propTypes = {
  heading: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Post;
