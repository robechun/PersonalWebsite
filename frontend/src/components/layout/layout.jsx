import React, { useState, useEffect } from "react";
import Footer from './footer';
import Header from './header';

import { withStyles } from '@material-ui/core/styles';

const styles = {
};

const Layout = (props) => {

  const [isClient, setIsClient] = useState(0);

  // Two pass rendering because we have hydration problems.
  // See: https://github.com/gatsbyjs/gatsby/issues/17914
  useEffect(() => {
    setIsClient(1);
  }, []);

  return (
    <div key={isClient}>
      <Header/>
        <div>{props.children}</div>
      <Footer/>
    </div>
  );

}

export default withStyles(styles)(Layout);
