import styled from 'styled-components';

import { SideBar } from './SideBar';
import { Header } from './Header';
import { Logo } from './Logo';

const StyledLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  background-color: orange;
`;

function Layout() {
  return (
    <>
      <StyledLayout>
        <SideBar />
        <Header>
          <Logo>banco</Logo>
        </Header>
        <Main></Main>
      </StyledLayout>
    </>
  );
}

export default Layout;
