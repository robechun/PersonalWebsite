import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = {
  bookStyle: {
    height: '224px',
  }
}

const BookCard = (props) => {
  const { classes } = props;

  return (
    <Button href={props.slug} disableRipple>
      <img className={ classes.bookStyle } src={props.imageUrl} alt=''/>
    </Button>

  );
}

BookCard.propTypes = {
  slug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default withStyles(styles)(BookCard);
