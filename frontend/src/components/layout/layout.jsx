import React, { useState, useEffect } from "react";
import Footer from './footer';
import Header from './header';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  body: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: '1200px'
  }
};

const Layout = (props) => {

  const [isClient, setIsClient] = useState(0);
  const { classes } = props;

  // Two pass rendering because we have hydration problems.
  // See: https://github.com/gatsbyjs/gatsby/issues/17914
  useEffect(() => {
    setIsClient(1);
  }, []);

  return (
    <div key={isClient}>
      <Header/>
        <div className={classes.body}>{props.children}</div>
      <Footer/>
    </div>
  );

}

export default withStyles(styles)(Layout);
