import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineBanknotes,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2';

const StyledNav = styled.nav`
  border-right: 1px solid var(--color-gray-100);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20rem 0;
  transition: all 0.5s;

  grid-column: 1 / 2;
  grid-row: 1 / -1;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;

    grid-column: 1 / -1;
    grid-row: 3 / -1;
  }
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    width: 65vw;
    border: 1px solid var(--color-gray-100);
    border-radius: 8px;
    padding: 1rem 1.5rem;
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    width: 21rem;
    font-size: 1.6rem;
    background-color: var(--color-gray-0);
    color: var(--color-gray-700);
    border: none;
    border-radius: 5px;
    padding: 1.5rem 2rem 1.5rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.5s;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: max-content;
      padding: 1rem 1.5rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-gray-100);
  }

  & svg {
    font-size: 2.5rem;
    transition: color 0.2s;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-primary-400);
  }
`;

const Span = styled.span`
  font-weight: 700;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome /> <Span>Home</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/accounts">
            <HiOutlineBanknotes /> <Span>Manage Account</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/transactions">
            <HiOutlineArrowTrendingUp /> <Span>Transactions</Span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default Nav;
