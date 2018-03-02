import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, MenuItem } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  menuItem: {
    fontSize: '1.5rem',
    width: 120,
  },
});

class AppbarMenuGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(event) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  close() {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const { classes, name, icon } = this.props;
    const { anchorEl } = this.state;
    const menuItems = this.props.items.map(item => (
      <MenuItem
        key={item.name}
        className={classes.menuItem}
        onClick={this.close}
        component={props => <Link to={item.route} {...props} />}
      >
        {item.name}
      </MenuItem>
    ));

    return (
      <div style={{ display: 'inline-block' }}>
        <Button
          color="inherit"
          aria-owns={anchorEl ? name : null}
          aria-haspopup="true"
          onClick={this.open}
        >
          <Icon style={{ marginRight: '5px' }} className={icon} />
          {name}
        </Button>
        <Menu
          id={name}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.close}
          getContentAnchorEl={null}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          {menuItems}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(AppbarMenuGroup);