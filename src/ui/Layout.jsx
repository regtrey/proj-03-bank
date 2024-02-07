import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Sidebar from './SideBar';
import { Header } from './Header';
import { Logo } from './Logo';

const StyledLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  background-color: var(--color-gray-0);
`;

function Layout() {
  return (
    <>
      <StyledLayout>
        <Sidebar />
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
