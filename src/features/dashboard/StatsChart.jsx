import styled from 'styled-components';
import { Heading } from '../../ui/Heading';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';

const StyledStatsChart = styled.div`
  background-color: var(--color-gray-50);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  grid-column: 1 / -1;
  grid-row: 3 / -1;
`;

const StatsChartHeading = styled(Heading)`
  font-size: 2.2rem;
`;

function StatsChart() {
  const transactions = useSelector((state) => state.accounts.transactions);
  const updatedTransactions = !transactions
    ? []
    : transactions.map((transaction) =>
        Object.assign({}, transaction, { date: transaction.date.slice(0, 6) })
      );

  return (
    <StyledStatsChart>
      <StatsChartHeading>Transactions Chart</StatsChartHeading>

      <ResponsiveContainer height="80%" width="100%">
        <LineChart height={10} width={500} data={updatedTransactions}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="deposit" stroke="#3fd7b6" unit="$" />
          <Line type="monotone" dataKey="withdraw" stroke="#e08f55" unit="$" />
          <Line type="monotone" dataKey="loan" stroke="#aa28d9" unit="$" />
        </LineChart>
      </ResponsiveContainer>
    </StyledStatsChart>
  );
}

export default StatsChart;
