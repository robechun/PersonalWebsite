import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Title from '../title';

const styles = {
  article: { 
    fontFamily: 'Raleway',
    fontSize: '12px',
  },
}

const PaperlessContent = (props) => {

  const { classes } = props;

  return(
      <article>
        <header>
          <Title>{props.title}</Title>
        </header>
        <section 
          className={classes.article}
          dangerouslySetInnerHTML={{ __html: props.html }} />
        <hr/>
      </article>
    )
}

export default withStyles(styles)(PaperlessContent);
