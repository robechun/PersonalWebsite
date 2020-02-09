import React from "react";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { SocialIcon } from 'react-social-icons';

import { withStyles } from '@material-ui/core/styles';

const themeColor = '#31315C';

const styles = {
  footer: {
    position: 'flex',
    bottom: '0',
    width: '100%',
    height: '3.5rem',
    backgroundColor: themeColor,
    paddingRight: '20px',
  },

  copyRight: {
    fontFamily: 'Nunito',
    fontSize: '16px',
    color: '#A6B0EA',
    fontWeight: 'lighter',
    marginLeft: '1em',
    fontStyle: 'italic'
  }
};

const socialLinks = {
  height: 40,
  width: 40
};

const socialLinkColor = '#FFCFCF';

const Footer = (props) => {

  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
        spacing={2}
      >
        <Hidden xsDown>
          <Grid item className={classes.copyRight}>
            © Robert Chung
          </Grid>
        </Hidden>

        <Grid item>
          <Grid 
            container
            direction='row'
            justify='flex-end'
            alignContent='center'
            spacing={2}
          >
            <Grid item>
              <SocialIcon 
                url='https://linkedin.com/in/robertchung97'
                bgColor={socialLinkColor}
                style={socialLinks}
              />
            </Grid>
            <Grid item>
              <SocialIcon 
                url='https://github.com/Altrum/'
                bgColor={socialLinkColor}
                style={socialLinks}
              />
            </Grid>
            <Grid item>
              <SocialIcon 
                url='mailto:robertchung97@gmail.com'
                bgColor={socialLinkColor}
                style={socialLinks}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );

}

export default withStyles(styles)(Footer);