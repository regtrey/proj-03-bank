import styled from 'styled-components';

const StyledDashboard = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 25rem 1fr;
  background-color: #dea4a4;
`;

const Heading = styled.h1`
  font-size: 3rem;
  padding: 1rem;
  letter-spacing: -2px;
`;

const Col1 = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: aliceblue;
`;

const Col2 = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: #9decc6;
`;

const Col3 = styled.div`
  grid-column: 3 / -1;
  grid-row: 2 / 3;
  background-color: #b99dec;
`;

const Col4 = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / -1;
  background-color: #dee6a5;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Heading>Dashboard</Heading>
      <Col1>1</Col1>
      <Col2>2</Col2>
      <Col3>3</Col3>
      <Col4>4</Col4>
    </StyledDashboard>
  );
}

export default Dashboard;
