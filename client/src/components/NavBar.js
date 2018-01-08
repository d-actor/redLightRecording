import React, { Component } from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import redLightNav from  '../images/redLightMain.jpg';

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/schedule'>
            <Menu.Item
              name='Scheduling'
            />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item 
            name='Register' 
          />
        </Link>
        <Link to='/login'>
          <Menu.Item
            name='Login' 
          />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <Container>
        <Menu stackable fixed='top'>
          <Link to='/'>
            <Menu.Item active={this.activeItem('/')}>
            <Image size='mini' src={redLightNav} />
            </Menu.Item>
          </Link>
          <Link to='/gear'>
            <Menu.Item name='Gear' />
          </Link>
          <Link to='/samples'>
            <Menu.Item name='Featured Projects' />
          </Link>
          <Link to='/Contact'>
            <Menu.Item name='Contact' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
