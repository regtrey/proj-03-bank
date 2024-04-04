import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Logo } from './Logo';
import Nav from './Nav';

const StyledLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;

  @media screen and (min-width: 1800px) {
    grid-template-columns: 30rem 1fr;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: 7rem 1fr auto;
  }
`;

const Main = styled.main`
  overflow: scroll;

  grid-column: 2 / -1;
  grid-row: 2 / -1;

  @media screen and (max-width: 850px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

function Layout() {
  return (
    <>
      <StyledLayout>
        <Nav />
        <Header>
          <Logo>banco</Logo>
        </Header>
        <Main>
          <Outlet />
        </Main>
      </StyledLayout>
    </>
  );
}

export default Layout;
