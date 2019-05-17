import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';

const StyledSidebar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
`;

const StyledSidebarLogo = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledSidebarLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <StyledSidebar activeColor={pageType}>
    <StyledSidebarLogo to="/" />
    <StyledSidebarLinks>
      <li>
        <ButtonIcon exact as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon exact as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon exact as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </StyledSidebarLinks>
    <StyledLogoutButton as={NavLink} to="/logout" icon={logoutIcon} />
  </StyledSidebar>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
