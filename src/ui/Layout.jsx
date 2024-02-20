import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

// import Sidebar from './Sidebar';
import { Header } from './Header';
import { Logo } from './Logo';

const StyledLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 7rem 1fr auto;
  }
`;

const Main = styled.main`
  overflow: scroll;

  grid-column: 2 / -1;
  grid-row: 2 / -1;

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

function Layout() {
  return (
    <>
      <StyledLayout>
        {/* <Sidebar /> */}
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
