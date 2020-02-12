import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import Title from '../title';

const styles = {
  article: { 
    fontFamily: 'Raleway',
    fontSize: '12px',
  },

  somePadding: {
    padding: '0px 30px 0px 30px'
  }
}

const PaperlessContent = (props) => {

  const { classes } = props;

  return(
      <article>
        <header>
          <Title className={classes.somePadding}>{props.title}</Title>
        </header>
        <section 
          className={ cx(classes.article, classes.somePadding) }
          dangerouslySetInnerHTML={{ __html: props.html }} />
        <hr/>
      </article>
    )
}

export default withStyles(styles)(PaperlessContent);
