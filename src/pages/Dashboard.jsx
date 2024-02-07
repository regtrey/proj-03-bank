import styled from 'styled-components';
import BalanceCard from '../ui/BalanceCard';

const StyledDashboard = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 22.5rem 1fr;
  gap: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: var(--color-gray-800);
  letter-spacing: -2px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;

  grid-column: 1 / -1;
  grid-row: 2 / 3;
`;

const Col2 = styled.div`
  width: 100%;
  background-color: #9decc6;
  border-radius: 15px;
`;

const Col3 = styled.div`
  width: 100%;
  background-color: #b99dec;
  border-radius: 15px;
`;

const Col4 = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / -1;
  background-color: #dee6a5;
  border-radius: 15px;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Heading>Dashboard</Heading>
      <StatsRow>
        <BalanceCard />
        <Col2>2</Col2>
        <Col3>3</Col3>
      </StatsRow>
      <Col4>4</Col4>
    </StyledDashboard>
  );
}

export default Dashboard;
