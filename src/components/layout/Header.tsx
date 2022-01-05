import { NavLink, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import React from 'react';

const Header = () => {
  const { appState, dispatch } = useContext(AppContext);

  useEffect(() => {});

  const signOut = (event: any) => {
    event.preventDefault();

    dispatch({
      type: 'LOG_OUT',
    });
    window.location.href = '/';
  };

  return (
    <nav className='navbar navbar-light navbar-expand-lg' id='navbar-section'>
      <div className='navbar-collapse' id='navbarSupportedContent'>
        <NavLink id='main-logo' className='nav-link' exact to='/dashboard'>
          Twittee!
        </NavLink>

        <div className='d-flex align-self-stretch align-items-end pb-1 px-3 user-account-menu-wrap active'>
          <Dropdown style={{ display: 'inline-block' }}>
            <Dropdown.Toggle className='d-flex align-items-center' variant='' id='dropdown-basic-1'>
              <span id='user-gravatar' className='gravatar'>
                {appState.user.name.charAt(0)}
              </span>
              <div id='user-username' className='ms-3'>
                {appState.user.name}
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className='drop-down-menu-custom-1'>
              <Dropdown.Item as='div'>
                <Link className='nav-link' to='/dashboard/settings'>
                  Settings
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as='div'>
                <Link className='nav-link' to='' onClick={signOut}>
                  Log Out
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Header;
