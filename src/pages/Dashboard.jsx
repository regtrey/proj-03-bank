import styled from 'styled-components';

import { Heading } from '../ui/Heading';
import BalanceCard from '../features/dashboard/BalanceCard';
import Bills from '../features/dashboard/Bills';
import StatsChart from '../features/dashboard/StatsChart';

const StyledDashboard = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 22.5rem 1fr;
  gap: 1.5rem;

  @media screen and (min-width: 1800px) {
    width: 75vw;
    margin: 0 auto;
  }

  @media screen and (max-width: 850px) {
    height: max-content;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 25rem;
    padding-bottom: 26rem;
  }

  @media screen and (max-width: 767px) {
    height: max-content;
    grid-template-columns: 90vw;
    grid-template-rows: auto 1fr 25rem;
    padding: 2rem;
    padding-bottom: 12rem;
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;

  grid-column: 1 / -1;
  grid-row: 2 / 3;

  @media screen and (max-width: 850px) {
    width: 100%;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Heading>Dashboard</Heading>

      <StatsRow>
        <BalanceCard variant="debit" />
        <BalanceCard variant="credit" />
        <Bills />
      </StatsRow>

      <StatsChart />
    </StyledDashboard>
  );
}

export default Dashboard;
