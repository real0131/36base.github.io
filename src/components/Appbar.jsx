import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';

import { toggleMobile } from '../actions/menu';

const style = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    top: '0',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Appbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.props.toggleMobile}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">36베이스</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const stateMapper = undefined;
const dispatchMapper = dispatch => ({
  toggleMobile: () => dispatch(toggleMobile()),
});

export default connect(stateMapper, dispatchMapper)(withStyles(style)(Appbar));
