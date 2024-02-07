import styled from 'styled-components';
import {
  HiOutlineHome,
  HiOutlineBanknotes,
  HiOutlineCircleStack,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

export const StyledSidebar = styled.nav`
  border-right: 1px solid var(--color-gray-100);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20rem 0;
  transition: all 0.5s;

  grid-column: 1 / 2;
  grid-row: 1 / -1;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
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
`;

function SideBar() {
  return (
    <StyledSidebar>
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
          <StyledNavLink to="/loan">
            <HiOutlineCircleStack /> <Span>Loan</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/transactions">
            <HiOutlineArrowTrendingUp /> <Span>Transactions</Span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledSidebar>
  );
}

export default SideBar;
