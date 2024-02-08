import styled from 'styled-components';

import { Heading } from '../ui/Heading';
import BalanceCard from '../features/dashboard/BalanceCard';
import ExpensesCard from '../features/dashboard/ExpensesCard';
import Bills from '../features/dashboard/Bills';

const StyledDashboard = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 22.5rem 1fr;
  gap: 1.5rem;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;

  grid-column: 1 / -1;
  grid-row: 2 / 3;
`;

const StyledStatsChart = styled.div`
  background-color: var(--color-gray-200);
  border-radius: 15px;
  padding: 2rem;

  grid-column: 1 / -1;
  grid-row: 3 / -1;
`;

const StatsChartHeading = styled(Heading)`
  font-size: 2.2rem;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Heading>Dashboard</Heading>

      <StatsRow>
        <BalanceCard />
        <ExpensesCard />
        <Bills />
      </StatsRow>

      <StyledStatsChart>
        <StatsChartHeading>Expenses Chart</StatsChartHeading>
      </StyledStatsChart>
    </StyledDashboard>
  );
}

export default Dashboard;
