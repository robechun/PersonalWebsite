import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Title from '../title'

const styles = {
  article: { 
    fontFamily: 'Raleway',
    fontSize: '16px',
  },
  paperStyle: {
    margin: '50px',
    padding: '50px',
    marginTop: '-7em',
    zIndex: '2',
    position: 'relative'
  },
}

const PaperContent = (props) => {

  const { classes } = props;

  return(
      <Paper className={classes.paperStyle}>
        <article>
          <header>
            <Title>{props.title}</Title>
          </header>
          <section 
            className={classes.article}
            dangerouslySetInnerHTML={{ __html: props.html }} />
          <hr/>
        </article>
      </Paper>
    )
}

export default withStyles(styles)(PaperContent);
